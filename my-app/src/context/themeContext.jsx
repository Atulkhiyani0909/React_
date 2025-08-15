import React, { createContext } from 'react'



export const ThemeContext=createContext()


const ContextProvider=(props)=>{
    
    const theme=localStorage.getItem("theme")

      return(
        <ThemeContext.Provider value={theme}>
        {props.children}
      </ThemeContext.Provider>
      )
}

export default ContextProvider
