import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";

function Callback() {
  const [details, setDetails] = useState({ name: "" });
  const [user, setUser] = useState(null);
  const input = useRef();

  // ✅ Stable function — only changes if `user` changes
  const fetchData = useCallback(async () => {
    if (!user) return;
    console.log("Inside the function Call with:", user);

    const { data } = await axios.get(`https://api.agify.io/?name=${user}`);
    setDetails({ name: data.age });
  }, [user]);

  // Call API whenever `user` changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <input type="text" ref={input} placeholder="Enter name" />
      <button onClick={() => setUser(input.current.value)}>Search</button>

      <button onClick={() => alert("Unrelated action")}>Other Action</button>

      <p>Name (Age): {details.name}</p>
    </div>
  );
}

export default Callback;
