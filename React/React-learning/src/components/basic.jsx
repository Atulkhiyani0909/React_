import React, { useState } from 'react'

function Basic() {
    const [count,setCount]=useState(0)
    return (
        <>
        <h1 className="text-5xl font-bold underline">Counter {count < 11 ? count : "No Updation Possible"}</h1>
        <button  onClick={()=>{
            count <11 ?setCount(count+1): ""
        }}>Click Me</button>
        {console.log(count)}
        </>
    )
}

export default Basic
