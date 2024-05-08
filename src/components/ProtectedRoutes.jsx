import React from 'react'
import Header from './header/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  return (
    <div className=''>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProtectedRoutes