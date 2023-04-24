
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { counterSlice } from '../store';


export default function CountApp() {
    const counter = useSelector(state=>state.count);
    const dispatch = useDispatch()

    const handleInclick=()=>{
      dispatch(counterSlice.actions.inCrement())
    }
    const handledecrement=()=>{
      dispatch(counterSlice.actions.decrement())
    }

    const handleReset=()=>[
      dispatch(counterSlice.actions.reset())
    ]
  return (
    <div>
        <h1>this is counter</h1>
      <h1>{counter}</h1>
      <button onClick={handleInclick}>InCrement</button>
      <button onClick={handledecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>


    </div>
  )
}
