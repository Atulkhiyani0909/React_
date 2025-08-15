import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const inLink=useParams()
    console.log(inLink.id);
    
    return (
        <>
        <h1>User in LINK {inLink.id}</h1>
        </>
    )
}

export default User
