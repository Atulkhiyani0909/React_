import React from 'react'
import {Link} from 'react-router-dom'

function Bar() {
    return (
        <>
        <div style={{position:"fixed"}}>
            <Link to={"/qrcode"}>QR CODE</Link>

            <Link to={"/accordian"}>Accordian</Link>
        </div>
        </>
    )
}

export default Bar
