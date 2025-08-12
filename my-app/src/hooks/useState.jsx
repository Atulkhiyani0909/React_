import React, { useState } from 'react'

function UseState() {
    const[name,setname]=useState();
    const[ifname,setifname]=useState(false);

    const changeName=()=>{
        setifname(!ifname)
        setname("Atul Khiyani")
    }

    const[count,setCount]=useState(0);
    const increaseCounter=()=>{
        // setCount(count+4)

        // to use the prev value 
        setCount((prev)=>{return prev+1}) //both same 
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
    }

    const[details,setdetails]=useState({
        Bike:"Splender",
        Color:"Green",
        brand:"Honda"
    })


    //to save the prev context return the arrow function with updated value 
    const setDeatils=()=>{
        setdetails((prev)=>{
            return {...prev,Color:"Blue"}
        })
    }

    return (
        <>

        <h2 onClick={()=>changeName()}>Hello from {ifname ? name : ""}</h2>
        <h2 onClick={()=>setDeatils()}>Hi have {details.Color} {details.Bike} from {details.brand}</h2>
        <button onClick={()=>increaseCounter()}>Click Me + 3    for {count}</button>
        </>
    )
}

export default UseState
