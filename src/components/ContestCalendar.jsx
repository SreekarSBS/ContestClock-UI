import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

import Popovers from "./Popovers";
import { Bounce, toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from "./ui/button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";



const ContestCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const user = useSelector((store) => store.user);
  const location = useLocation()
  const context = useOutletContext()
  const events = context[2]
  let savedEvents = context[3]
  
  console.log(date);
    const handleSignIn = async() => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        toast.success('Logged In Successfully !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
        const user = result.user;
        console.log(user);
        
      
      }).catch((error) => {
    
      
        const errorMessage = error.message;
       
        console.log(errorMessage);
        
      });
    }
  if(!user && location.pathname === "/contest") {
    savedEvents = [];
    
   return <div className="w-1/2 mx-auto mt-20">
   <Card>
  <CardHeader>
    <CardTitle>Login to ContestClock</CardTitle>
    <CardDescription>Sign In with Google</CardDescription>
    <CardAction>
      <img src = "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt = "Logo Icon" className="w-10 h-10 rounded-full" /> 
    </CardAction>
  </CardHeader>
  <CardContent>
  <div onClick={handleSignIn} className="cursor-pointer  flex mx-auto m-6  flex-wrap items-center gap-2 md:flex-row">
        <Button> Sign In</Button>
       
      </div>
  </CardContent>
  <CardFooter>
To Track Your Saved Contests 
 please sign in with your Google Account
  </CardFooter>
</Card>
   </div>
    
     
  }

  const handleClick = (arg) => {
    setDate(arg.date);
    console.log(arg.date);
    const formatted = arg?.date.toLocaleDateString('en-CA')
    navigate("/contests/" + formatted);
  };
  return (
    <div className={`w-full h-full ${location.pathname === "/contest" ? "p-8" : "p-0"}`}>
      {location.pathname === "/contest" && <div className="mt-5  underline underline-offset-8 text-center text-3xl sm:text-4xl md:text-5xl text-lime-300 font-extralight "> Scheduled Contests</div>}
      <FullCalendar
        selectable={true}
        select={(info) => {
          console.log("Selected Date Range:", info.startStr, "to", info.endStr);
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={location.pathname === "/" && events || location.pathname === "/contest" && savedEvents}
        eventContent={(eventInfo) =><Popovers eventInfo={eventInfo}/>
          
          }
        dayCellContent={(arg) => {
          return (
            <div
              className={`hover:bg-white text-center ${new Date(arg.date).toDateString() === new Date().toDateString() ? "bg-green-700" : " bg-blue-400"} text-blue-50 font-bold w-6 hover:text-black rounded-full`}
              onClick={() => handleClick(arg)}
              style={{ cursor: "pointer" }}
            >
              {arg.dayNumberText}
            </div>
          );
        }}
        eventClick={(info) => {
          console.log(info);
          
          info.jsEvent.preventDefault();
          //  window.open(info.event.url);
        }}
      />
    </div>
  );
};

export default ContestCalendar;
