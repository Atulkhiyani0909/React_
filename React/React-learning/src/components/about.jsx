import React from 'react'
import { Outlet } from "react-router-dom";
function About() {
    return (
        <>
        <h1>About</h1>
        <Outlet/>
        {/* for the child there must be a outlet in the parent to do this 
         */}
        </>
    )
}

export default About
