import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Body = () => {
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
