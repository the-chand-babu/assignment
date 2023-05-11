//https://jsonplaceholder.typicode.com/posts

import React,{useState,useEffect} from "react";
import "./App.css";




export default function App() {
const [counter,setCounter]= useState(0);

useEffect(()=>{
  
 const id= setInterval(()=>{
      setCounter(counter+1)
  },1000)
  return(()=>{
    clearInterval(id)
  })
},[counter])


  return (
    <div className="detail-container">
        <p>{counter}</p>
    </div>
  );
}
