
import { useSelector } from 'react-redux'
import { Bounce, toast } from 'react-toastify'


import CardsContest from './CardsContest'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../utils/firebase'
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



const RegisteredContests = () => {
    const user = useSelector(store => store.user)
    
    const savedContests = useSelector(store => store.registeredContests)

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
    if(!user ){
  
      
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

 
  // Default values shown
 

  return (
    <div>
      
    <div className=" w-1/2 text-center h-16 mx-auto mt-6 rounded-full  bg-">
    <div className="m-12 text-3xl sm:text-4xl md:text-5xl font-extralight text-lime-300 underline underline-offset-8 "> Saved Contests</div>
    </div>
    { savedContests?.map((item) => {
    
      return <ul key={item._id} className="list w-[80%] mx-auto my-4 rounded-3xl border-l-red-400 border-l-4 border-b-4 border-b-red-500 bg-base-100  shadow-md">
  
   <CardsContest item = {item} />
  
  </ul>
          
    } )}
    </div>
  )
}

export default RegisteredContests





