// import React, { useState, useRef, useMemo, useEffect, useContext } from "react";
// import axios from "axios";
// import { AppContext } from "../context/AppContext";

// function useMemos() {
//   const [details, setDetails] = useState({ name: "" });
//   const [user, setUser] = useState(null);
//   const input = useRef();

//   //useMemo memorize and call that only there is change in it if no change in that then doesn't call it 
  
//   //  Memoized user value — only changes when `user` changes
//   const memoizedUser = useMemo(()=>{
//     return user
//   },[user]);

//   useEffect(() => {
//     if (!memoizedUser) return;

//     const api = async () => {
//       console.log("Inside the function Call with:", memoizedUser);
//       const { data } = await axios.get(
//         `https://api.agify.io/?name=${memoizedUser}`
//       );
//       setDetails({ name: data.age });
//     };

//     api();
//   }, [memoizedUser]); // only runs when memoizedUser changes

//   const phone=useContext(AppContext)

//   return (
//     <div>
//       <h1>Phone : {phone}</h1>
//       <input type="text" ref={input} placeholder="Enter name" />
//       <button onClick={() => setUser(input.current.value)}>Search</button>

//       {/* This button changes local UI state but won't trigger API */}
//       <button onClick={() => alert("Unrelated action")}>Other Action</button>

//       <p>Name (Age): {details.name}</p>
//     </div>
//   );
// }

// export default useMemos;
