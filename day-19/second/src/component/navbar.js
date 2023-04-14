
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar=()=>{

    return (

        <div className='nav-container'>
        <div></div>


            <ul>

            <Link to={'/home'} className='link-tag'>Home </Link>
            <Link to={'/create'} className='link-tag'>Create </Link>
            <Link to={'/edit'} className='link-tag'>Edit </Link>
            <Link to={'/delete'} className='link-tag'>Delete </Link>




            </ul>
        </div>


    )



}

export {Navbar}