import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  return (
    <div>
        <Header/>
        <br />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ProtectedRoutes