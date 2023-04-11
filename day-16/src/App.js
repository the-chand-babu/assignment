import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';


function App() {
// "4": [
  //   "getposts form https://jsonplaceholder.typicode.com/posts",
  //   "show on table",
  //   "add remove button",
  //   "delete post when click on remove button"
  // ]

  const [post , setPost] = useState([]);
  // const [newData,setNewData]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((res)=>setPost(res))
  },[])

console.log(post)


const handelDelete=(Id)=>{

  const newData = post.filter((ele)=>ele.id != Id);
  setPost(newData)


}



  return (
    <div>
      <h1 className='heading'>Post Data!</h1>
     

      <table>
      <thead>
        <tr>
    <th>ID</th>
    <th>UserId</th>
    <th>Title</th>
    <th>Body</th>
    <th>Action</th>
        </tr>
      </thead>

<tbody>

{

post.map((post)=>{

  return(

    <tr>

    <td>{post.id}</td>
    <td>{post.userId}</td>
    <td>{post.title}</td>
    <td>{post.body}</td>
      <td className='delete' onClick={()=>handelDelete(post.id)}>❌</td>



    </tr>


  )
})

}



</tbody>



      </table>
      
     
      
    </div>
  );
}

export default App;
