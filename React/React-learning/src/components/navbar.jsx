import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
        <h1>Navbar</h1>
        <Link to={"/about"}>About</Link> 
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        </>
    )
}

export default Navbar
