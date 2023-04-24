import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store";
import './todo.css'

let count =1;

export default function Todo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.users);

  const handleDelete = (id) => {
    dispatch(userSlice.actions.deleteTodo({ id }));
  };
  const handleName=(e)=>{
        setName(e.target.value);
  }
const handleEmail=(e)=>{
        setEmail(e.target.value);
}
  const handleAddtodo = () => {
    const user = {
      name: name,
      email: email,
      compelete: false,
      id:count++ ,
    };
    dispatch(userSlice.actions.addTodo(user));
  };

  const handleComplete=(item)=>{
    dispatch(userSlice.actions.isComplete(item))
  }
  return (
    <div>
      <div>
        <label htmlFor="">Name:</label>
        <input value={name} onChange={handleName}type="text" />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input onChange={handleEmail} value={email}  type="text" />
        <br />
        <br />
        <button onClick={handleAddtodo}>Add data</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
          
            return (
              <tr className={item.compelete?"iscomplete":""} key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td onClick={()=>handleComplete(item)}>completed</td>
                <td onClick={() => handleDelete(item.id)}>delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
    </div>
  );
}
