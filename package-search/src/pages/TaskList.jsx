import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function TaskList() {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("favourite")) || []
  );

  const handleDelete = (item) => {
    const arr = favourite.filter((fav) => {
      if (item.id !== fav.id) {
        return item;
      }
    });

    localStorage.setItem("favourite", JSON.stringify(arr));
    setFavourite(arr);
  };

  return (
    <div style={{width:"50%",margin:"auto",textAlign:"center",padding:"20px 0"}}>
      <button style={{color:"white",background:"purple",padding:"15px 40px",border:'none',borderRadius:"20px"}} onClick={() => navigate("/")}>Add Fav</button>
      <table style={{width:"100%",marginTop:"2rem"}}>
        <thead style={{border:"1px solid black",background:"black",color:"white",}}>
          <tr >
            <th style={{padding:"15px 0"}}>Id</th>
            <th>Package Name</th>
            <th>Discription</th>
            <th>Deleted</th>
          </tr>
        </thead>

        <tbody>
          {favourite.map((item) => {
            return (
              <tr key={item.id}>
                <td style={{padding:"15px 0"}}>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.discription}</td>
                <td style={{cursor:"pointer"}} onClick={() => handleDelete(item)}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
