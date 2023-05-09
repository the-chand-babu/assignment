import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Admin = () => {
  const [dataArr, setDataArr] = useState(
    JSON.parse(localStorage.getItem('questionData')) || []
  );
  const [isUpdate, setIsupdate] = useState(false);
  const [data, setData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    Image: '',
    correctAnswe: '',
    id: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {

if(isUpdate){
  
  const newArr = dataArr.map((item)=>{
    if(item.id === data.id){
      return data
    }
    return item;
  })
  setDataArr([...newArr]);
  localStorage.setItem("questionData",JSON.stringify([...newArr]));
  setData({
    question:"",
    option1:"",
    option2:"",
    option2:"",
    option3:"",
    option4:"",
    correctAnswe:"",
  })
  
  return;
}


    setDataArr([...dataArr, { ...data, id: dataArr.length + 1 }]);
    localStorage.setItem(
      'questionData',
      JSON.stringify([...dataArr, { ...data, id: dataArr.length + 1 }])
    );
    setData({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correctAnswe: '',
      Image: '',
    });
  };

  const handleDelete = (id) => {
    const newArr = dataArr.filter((item) => item.id !== id);
    setDataArr([...newArr]);
    localStorage.setItem('questionData',JSON.stringify([...newArr]))
  };

  const handleUpdate = (item) => {
    setData({ ...item });
    setIsupdate(true);
  };

  return (
    <div className="mt-5 border p-5" style={{ width: "50%", margin: "auto" }}>
        <Link to="/student">Go to student page</Link>
        <h1 className="text-primary">ADMIN PAGE</h1>
      <input
      className="form-control mt-5"
        value={data.question}
        onChange={handleChange}
        name="question"
        type="text"
        placeholder="Enter your Question"
      />
      <input
      className="form-control mt-5"
        value={data.Image}
        onChange={handleChange}
        name="Image"
        type="text"
        placeholder="Enter image link"
      />
      <input
      className="form-control mt-5"
        value={data.option1}
        onChange={handleChange}
        name="option1"
        type="text"
        placeholder="Option 1"
      />
      <input
      className="form-control mt-5"
        value={data.option2}
        onChange={handleChange}
        name="option2"
        type="text"
        placeholder="ption 2"
      />
      <input
      className="form-control mt-5"
        value={data.option3}
        onChange={handleChange}
        name="option3"
        type="text"
        placeholder="option 3"
      />
      <input
      className="form-control mt-5"
        value={data.option4}
        onChange={handleChange}
        name="option4"
        type="text"
        placeholder="option 4"
      />
      <input
      className="form-control mt-5"
        value={data.correctAnswe}
        onChange={handleChange}
        name="correctAnswe"
        type="text"
        placeholder="correct Answer"
      />
      <button className="btn btn-primary" style={{marginTop:"20px"}} onClick={handleSubmit}>Submit</button>

      <div>
        <table   className="table table-hover table-striped table-bordered"
        style={{ width: "80%", margin: "auto" }}
>
          <thead>
            <tr>
              <th>Qestion</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {dataArr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.question}</td>
                  <td style={{cursor:'pointer',color:"white",background:"green"}}  onClick={() => handleUpdate(item)}>update</td>
                  <td style={{cursor:'pointer',color:"white",background:"red"}}  onClick={() => handleDelete(item.id)}>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Admin };
