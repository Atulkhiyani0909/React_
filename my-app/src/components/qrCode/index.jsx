import React, { useState } from 'react'
import QrCode from 'react-qr-code'

function QrCodeGen() {
    const [qrValue,setqrValue]=useState("");
    const [input,setInput]=useState("")

    return (
        <>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
        <button onClick={()=>{
            setqrValue(input)
            setInput("")
        }}>Generate</button>
        <QrCode id="qr-code-value" value={qrValue} size={400} bgColor="#fff" />
        </>
    )
}

export default QrCodeGen
