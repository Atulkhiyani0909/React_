// this is the custom react hook

import { useState,useEffect } from "react"
import axios from "axios"

const useCurrencyInfo=(currency)=>{
      const [data,setData]=useState({})

      useEffect(()=>{
          const fetchData=async ()=>{
            const datas=await axios.get(`https://jsonplaceholder.typicode.com/photos/8`)
             setData(datas)
          }

          fetchData()
      },[currency])

      return data
}

export default useCurrencyInfo