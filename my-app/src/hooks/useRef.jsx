import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const input=useRef()
    const[value,setValue]=useState()

    useEffect(()=>{
        console.log(input.current.value);
    },[value])
    return (
        <>
        <input type="text"  ref={input} onChange={()=>setValue(input.current.value)}/>
        </>
    )
}

export default UseRef
