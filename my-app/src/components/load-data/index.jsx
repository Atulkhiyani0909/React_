import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function Data() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchdata = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=25&skip=${count}`
    );
    setLoading(false);
    setProducts((prev) => [...prev, ...data.products]);
    setCount((prev) => prev + 25);    
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
        
      if (scrollTop + clientHeight >= scrollHeight -1  && !loading) {
        fetchdata();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  if (loading && products.length === 0) {
    return <h2>Loading Data ........</h2>;
  }

  return (
    <div>
        <button onClick={()=>fetchdata()}>Start Infinite Scroll </button>
       <nav style={{position:"fixed",marginLeft:"500px"}}>{`Total Products ${count}`}</nav>
      {products.map((item, index) => {
        return <h3 key={index}>{item.title}</h3>;
      })}
      
      {loading && <h1>Loading more...</h1>}
    
    </div>
  );
}

export default Data;
