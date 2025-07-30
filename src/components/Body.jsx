import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { Bounce, ToastContainer } from 'react-toastify'






const Body = () => {
  
  const dispatch = useDispatch()
  const [pictureURL,setPictureURL] = useState("")

  const fetchPutUser = async(token) => {
    try{
    const userDocument =await axios.get(BASE_URL + "/user",{
      withCredentials : true,
      headers : {
        'Authorization': 'Bearer ' +token
      }
    })
    setPictureURL(userDocument?.data?.data?.picture)
    
    
  }catch(err){
    console.log(err);
    
  }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        fetchPutUser(user?.accessToken)
        const cleanedUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          token : user?.accessToken
        };
       dispatch(addUser(cleanedUser))
      
        
      } else {
         
          console.log("Sign In");
      }
    });
  }, [auth]);
  console.log(pictureURL);
  
  return (
    <div className='min-h-screen flex flex-col'>
      
      <Header pictureURL = {pictureURL} />
    
      <ToastContainer/>

      <main className='flex-grow'>
    
      <Outlet />
      
      </main>
      <Footer />
    </div>
  )
}

export default Body
