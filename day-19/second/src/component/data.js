import {atom} from 'recoil'

const NoteAtom = atom({
    key: 'textState', 
    default: [], 
  });
  

  export {NoteAtom}