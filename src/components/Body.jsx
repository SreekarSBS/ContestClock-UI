import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'


const Body = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user);
      } else {
        console.log("No user signed in.");
      }
      
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Body
