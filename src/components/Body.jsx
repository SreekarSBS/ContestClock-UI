import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'


const Body = () => {
  const [userPresent,setUserPresent] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        
        const cleanedUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        };
       dispatch(addUser(cleanedUser))
        setUserPresent(true)
        
      } else {
          setUserPresent(false)
          console.log("Sign In");
      }
    });
  }, []);
  return (
    <div className='min-h-screen flex flex-col'>
      <Header  userPresent = {userPresent} setUserPresent = {setUserPresent} />
      <main className='flex-grow'>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Body
