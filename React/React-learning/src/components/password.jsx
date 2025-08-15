import React, { useCallback, useEffect, useRef, useState } from 'react'

function Password() {
    const [showpass,setshowpass]=useState("")
    const [value,setValue]=useState(5)
    const [number,setNumber]=useState(false)
    const [char,setChar]=useState(false)

    const copied=useRef()
    
    const passgen=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

     for(let i=0;i<value;i++){
        let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     }
     setshowpass(pass)

     
    },[value,number,char,setshowpass])

   useEffect(()=>{
    passgen()
   },[value,number,char,setshowpass])

    
    return (
        <>
        <h1>Password</h1>
        <input ref={copied} type="text" value={showpass} placeholder='Enter your text here'/>
        <input onChange={(e)=>setValue(e.target.value)} type="range" min={5} max={15} />
        <h2>Length of Pass {value}</h2>
        <label htmlFor="number">Number</label>
        <input onChange={()=>{setNumber(!number)}} type="checkbox" id='number'/>
        <label htmlFor="char">Character</label>
        <input onChange={()=>{setChar(!char)}}  type="checkbox" onClick={()=>{}} id='char'/>
        </>
    )
}

export default Password
