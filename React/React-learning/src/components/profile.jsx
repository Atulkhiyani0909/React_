import React, { useContext } from 'react'
import UserContext from '../context/usercontext'
import {Link} from 'react-router-dom'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user){
        return <Link to={'/login'}> Click here to Login </Link>
    }
    return (
        <>
        
        <h1>Welcome {user?.username}</h1>
        <h1>Your Password {user?.password}</h1>
        </>
    )
}

export default Profile
