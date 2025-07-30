import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const RegisteredContests = () => {
    const user = useSelector(store => store.user)
    const [savedContests,setSavedContests] = useState()


    useEffect(() => {
      fetchRegisteredContests()
    },[user])

    const fetchRegisteredContests = async() => {
        try{
            const res = await axios.get(BASE_URL + "/user/registeredContests",{
                withCredentials : true,
                headers : {
                    'Authorization': 'Bearer ' + user.token
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
  return (
    <div>
     { savedContests?.map((item) => {
        return <div key = {item._id} className= "bg-fuchsia-400 w-1/2 mx-auto rounded-2xl">
            <div className="text-3xl font-extralight">{item?.contestName}</div>
            </div>
     } )}
    </div>
  )
}

export default RegisteredContests
