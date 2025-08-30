
import { lazy, Suspense, useState } from "react";
import {  useNavigate, useOutletContext } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const CalendarWrapper = lazy(() => import("./CalendarWrapper"));
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
  
  const context = useOutletContext()
  const events = context[2]
  let savedEvents = context[3]
  
  // console.log(date);
    const handleSignIn = async() => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // console.log(token);
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
        // console.log(user);
        
      
      }).catch((error) => {
    
      
        const errorMessage = error.message;
       
        // console.log(errorMessage);
        
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
      <img src = "src/assets/icons8-google-48.png" alt = "Logo Icon" className="w-10 h-10 rounded-full" /> 
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
    // console.log(arg.date);
    const formatted = arg?.date.toLocaleDateString('en-CA')
    navigate("/contests/" + formatted);
  };
  return (
    <Suspense fallback={<div>Loading Calendar...</div>}>
    <CalendarWrapper events = {events} savedEvents = {savedEvents} handleClick = {handleClick}  />
  </Suspense>
  );
};

export default ContestCalendar;
