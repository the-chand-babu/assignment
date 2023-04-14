import {useRef} from 'react';
import {NoteAtom} from './data';
import {useRecoilState} from 'recoil'

const Create= ()=>{
    const title= useRef();
    const author= useRef();
    const disc= useRef();
    const ID= useRef();

    
    const [notes,setNotes] = useRecoilState(NoteAtom)





console.log(notes)

    const handelSubmit=()=>{

        const  obj={
            id:ID.current.value,
            title:title.current.value,
            author:author.current.value,
            disc:disc.current.value
            
        }

        setNotes(
            [
                ...notes,
                obj
            ]
        )





    }

    return(

        <div>

            <input ref={ID} type="text" placeholder="Enter Your ID" />
            <input ref={title} type="text" placeholder="Enter title" />
            <input ref={author} type="text" placeholder="enter author"/>
            <input ref={disc} type="text" placeholder="enter discription" />
            <button onClick={handelSubmit}>Submit Notes</button>



        </div>
    )
}


export {Create}