import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/themeContext'

function Theme() {

    const [mode, setMode] = useState(() => localStorage.getItem("theme") || "dark");

    useEffect(() => {
        console.log("Running");

        localStorage.setItem("theme", mode)
    }, [mode])


    return (
        <div style={{backgroundColor:mode==="light"?"white":"black",width: "600px", height: "600px" }}>
            <button onClick={() => {
                setMode("dark")
            }}>Dark</button>


            <button onClick={() => {
                setMode("light")
            }}>Light</button>
            <h2>This is the Main DIV </h2>
        </div>
    )
}

export default Theme
