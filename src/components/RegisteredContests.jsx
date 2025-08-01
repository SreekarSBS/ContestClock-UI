
import { useSelector } from 'react-redux'
import { Bounce, toast } from 'react-toastify'


import CardsContest from './CardsContest'




const RegisteredContests = () => {
    const user = useSelector(store => store.user)
    
    const savedContests = useSelector(store => store.registeredContests)

   
  if(!user){
    toast.info('Please Login to view your Registered Contests!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    
     
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





