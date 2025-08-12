import React, { useEffect, useState } from 'react'

//for the sending receiveing the data or subscribing the event or working with the timers 
function UseEffect() {
    const[count,setCount]=useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1);
        },1000)
    },[count])
    return (
        <>
        <h1>Hii I am now Showing {count}</h1>
        </>
    )
}

export default UseEffect
