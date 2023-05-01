import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Addtask() {
  let id;
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState({});
  const navigate = useNavigate();
  const [disc, setDisc] = useState("");
  const [allFavourite, setAllfavourite] = useState(
    JSON.parse(localStorage.getItem("favourite")) || []
  );

  const handleClick = () => {
    selectedValue.package.name;
    setAllfavourite([
      ...allFavourite,
      {
        id: allFavourite.length + 1,
        name: selectedValue.package.name,
        discription: disc,
      },
    ]);

    localStorage.setItem(
      "favourite",
      JSON.stringify([
        ...allFavourite,
        {
          id: allFavourite.length + 1,
          name: selectedValue.package.name,
          discription: disc,
        },
      ])
    );

    navigate("/list");
  };

  const handlediscChange = (e) => {
    setDisc(e.target.value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    clearTimeout(id);
    id = setTimeout(() => {
      fetch(`https://api.npms.io/v2/search?q=${value}`)
        .then((res) => res.json())
        .then((res) => setData(res.results));
    }, 1000);
  };
  const handleChangeRadio = (item) => {
    setSelectedValue(item);
  };
  const containerStyle = {
    width: "40rem",
    height: "200px",
    margin: "auto",
    padding: "30px 0",
    borderRadius: "20px",
    boxShadow: "8px -5px ",
    border: "1px solid grey",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "teal", width: "80%", margin: "auto" }}>
        Welcome to favortie npm package
      </h1>
      <button
        style={{
          color: "white",
          backgroundColor: "purple",
          padding: "1rem 50px",
          cursor: "pointer",
          border: "none",
          borderRadius: "10px",
          marginBottom: "2rem",
          marginLeft: "15rem",
          marginTop: "2rem",
        }}
        onClick={() => navigate("/list")}
      >
        Details
      </button>
      <br />

      <input
        style={{
          width: "15rem",
          marginLeft: "11rem",
          height: "3rem",
          paddingLeft: "1rem",
        }}
        type="text"
        placeholder="search Npm package"
        onChange={handleChange}
      />
      <div style={{border:"1px solid black",marginTop:'4rem',maxHeight:"27.8rem",overflowY:"auto",position:"absolute",left:'2rem',width:"25rem",borderRadius:"20px"}}>
        {data &&
          data.map((item, index) => {
            return (
              <div style={{display:'flex'}} key={index}>
                <input
                  type="radio"
                  name="radio"
                  onChange={() => handleChangeRadio(item)}
                />
                <h1>{item.package.name}</h1>
              </div>
            );
          })}
      </div>
      {selectedValue?.package?.name && (
        <div style={{position:'absolute',right:"34rem",bottom:'10rem',}}>
          <textarea
          placeholder="Enter Discription"
            name=""
            id=""
            cols="50"
            rows="10"
            onChange={handlediscChange}
          ></textarea>
          <br />
          <button style={{marginLeft:"9rem",marginTop:"20px",padding:"10px 40px",background:"purple",color:"white",border:"none",borderRadius:"20px"}} disabled={disc.length == 0} onClick={handleClick}>
            submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Addtask;
