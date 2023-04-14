
import {useRecoilValue} from 'recoil';
  import {NoteAtom} from './data'
  


const Home=()=>{

    const notes = useRecoilValue(NoteAtom)
   

return (

    <div>

    {
        notes.map((note,index)=>{
return (
    
    <div key={index}>
    <h1>{note.id}</h1>
    <h1>{note.title}</h1>
    <h1>{note.author}</h1>
    <h1>{note.disc}</h1>
    </div>




)

        })
    }

      
    </div>

)


}

export{Home}