import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { Link } from "react-router-dom";
import AddCalendar from './AddCalendar'

import CardsContest from './CardsContest'




const RegisteredContests = () => {
    const user = useSelector(store => store.user)
    const [savedContests,setSavedContests] = useState()


    useEffect(() => {
      if (!user?.token) return;  
      fetchRegisteredContests()
    },[user?.token])

    const fetchRegisteredContests = async() => {
        try{
            const res = await axios.get(BASE_URL + "/user/registeredContests",{
                withCredentials : true,
                headers : {
                    'Authorization': 'Bearer ' + user?.token
                }
            })
            setSavedContests(res?.data?.data.savedContests);
           
        }catch(err){
            console.log(err);
        }
    }
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





