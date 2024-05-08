import React from 'react'
import Header from './header/Header'
import AppBar from './header/AppBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  return (
    <div className=''>
        <Header />
        {/* <AppBar/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProtectedRoutes