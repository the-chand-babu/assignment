import {useRef} from 'react'
import { useRecoilState } from 'recoil';
import { NoteAtom } from './data';



const Edit= ()=>{
    const [data,setData] = useRecoilState(NoteAtom)
    const ID= useRef();
    const title= useRef();
    const author= useRef();
    const disc= useRef();
    


    const handleupdate=()=>{
        // console.log(
        //     ID.current.value,
        //     title.current.value,
        //     author.current.value,
        //     disc.current.value
        // )

        const newData = data.map((ele)=>{

            if(ele.id == ID.current.value){
                let obj={
                    id:ele.id,
                    title:title.current.value,
                    author:author.current.value,
                    disc:disc.current.value

                }
                // console.log(obj)
                return obj;
                
            }else{
                return ele
            } 

        })
        console.log(newData)

        setData(
            [...newData]
        )

    }



    return(

        <div>
            <input ref={ID} type ="text" placeholder="Enter ID which you want delete"  />
            <input ref={title} type ="text" placeholder="Enter titel "  />
            <input ref={author} type ="text" placeholder="Enter author "  />
            <input ref={disc} type ="text" placeholder="Enter Disc "  />
            <button onClick={handleupdate}>Update Data</button>


            
        </div>
    )
}


export {Edit}