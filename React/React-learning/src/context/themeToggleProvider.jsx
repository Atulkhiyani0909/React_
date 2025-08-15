import React, { useContext, useState } from "react";
import ThemeToggle from "./themeToggle";


export const themeToggleProvider=({children})=>{

    const [theme,setTheme]=useState('light')

    return(
        <ThemeToggle.Provider value={{theme,setTheme}}>
            {children}
        </ThemeToggle.Provider>
    )
}

export const ToggleProvider=themeToggleProvider;

// custom hook for using this context
export default function useTheme(){
       return useContext(ThemeToggle)
}