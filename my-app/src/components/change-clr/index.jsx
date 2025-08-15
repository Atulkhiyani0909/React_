import React, { useEffect, useState } from 'react'

function Color() {
    const[type,setType]=useState('hex')
    const [color,setColor]=useState(null)

     const hexColor = () => {
    let color = "#";
    const hexDigits = ["0","1","2","3","4","5","6","7","8","9",
                       "a","b","c","d","e","f"];
    for (let i = 0; i < 6; i++) {
        color += hexDigits[Math.floor(Math.random() * hexDigits.length)];
    }
    setColor(color);
}

const rgbColor = () => {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    setColor(color);
}

    return (
        <>
        <button onClick={()=>setType('hex')}>Hex Color</button>
        <button onClick={()=>setType('rgb')}>RGB Color</button>
        <button onClick={type==="hex" ? ()=>hexColor() : ()=>rgbColor()}>Generate Color</button>
        <div style={{width:"500px",height:"500px",backgroundColor:`${color}`,textAlign:"center"}}>
            <h2>{type==="hex" ? `HEX COLOR ${color}` : `RGB COLOR ${color}`}</h2>
        </div>
        </>
    )
}

export default Color
