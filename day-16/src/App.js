import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");
  const [isupdate, setIsupdate] = useState(false);

  const updateName = useRef();
  const updateEmail = useRef();
  const updateAge = useRef();
  const updatehobies = useRef();
  const isUserupdate = useRef();


  const handelNameChange = (e) => {
    setName(e.target.value);

    // console.log(name)
  };

  function handleAge(e) {
    setAge(e.target.value);
  }

  const handleHobby = (e) => {
    setHobby(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setData([
      ...data,
      {
        name,
        age,
        hobby,
        email,
      },
    ]);

    setAge("");
    setEmail("");
    setHobby("");
    setName("");

    console.log(data);
  };

  const handelItemdelete = (email) => {
    const newData = data.filter((ele) => ele.email != email);

    setData(newData);
  };

  const handelUpdate = (user) => {
    isUserupdate.current=user;
    console.log(isUserupdate)
    setIsupdate(!isupdate);
  };

  const handelupdateData = () => {
    const updatename = updateName.current.value;
    const updateage = updateAge.current.value;
    const udatehobbies=updatehobies.current.value;
    const updateemail = updateEmail.current.value;

    const newData = data.map((ele)=>{
      console.log(isUserupdate.current.email)
    return(

      ele.email==isUserupdate.current.email?
      {
        email:updateemail,
        name:updatename,
        hobby:udatehobbies,
        age:updateage
      }  :ele

    )

      
    })
    
    
    setData(newData)

  };

  const closetogel=()=>{
    setIsupdate(!isUserupdate)
  }

  // console.log(isupdate);
  return (
    <div className="App">
      <div className="form-container">
        <div className="inputData">
          <form action="">
            <input
              value={name}
              onChange={handelNameChange}
              type="text"
              placeholder="Enter your Name"
            />
            <input
              value={age}
              onChange={handleAge}
              type="number"
              placeholder="Enter your Age"
            />
            <input
              value={hobby}
              onChange={handleHobby}
              type="text"
              placeholder="Enter your hobbies"
            />
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              placeholder="Enter Your EMail"
            />

            <button onClick={handelSubmit}>ADD to list</button>
          </form>
        </div>
        <div className="liveData">
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4>{age}</h4>
          <h4>{hobby}</h4>
        </div>
      </div>

      <div className="table-container">
        <div className="divheading">
          <h4>Name</h4>
          <h4>age</h4>
          <h4>Hobbies</h4>
          <h4>Email</h4>
          <h4>Delete</h4>
          <h4>update-Data</h4>
        </div>
        {data.map((user) => {
          return (
            <div className="table-div">
              <p>{user.name}-</p>

              <p>{user.age}-</p>

              <p>{user.hobby}-</p>

              <p>{user.email}-</p>

              <span onClick={() => handelItemdelete(user.email)}>❌</span>
              <button onClick={()=>handelUpdate(user)}>Update</button>
            </div>
          );
        })}
      </div>

      <div className={isupdate?'active':'nonactive'}>
        <span onClick={closetogel} className="closetogle">✖</span>
        <input  ref={updateName} type="text" placeholder="Enter Updated Name" />
        <input ref={updateAge} type="number" placeholder="Enter Age Name" />
        <input ref={updatehobies} type="text" placeholder="Enter Hobbies Name" />
        <input  ref={updateEmail} type="text" placeholder="Enter email Name" />

        <button onClick={handelupdateData}>update Data</button>
      </div>
    </div>
  );
}

export default App;
