import React from 'react'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Navbar/>
        
        {/* this is means this is the dynamic we can add any pages b/w it*/}
        <Outlet/> 

        <Footer/>
        </>
    )
}

export default Layout
