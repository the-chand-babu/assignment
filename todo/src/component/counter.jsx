
import React from 'react'
import { useSelector } from 'react-redux'

export default function CountApp() {
    const counter = useSelector(state=>state.counter)
    console.log(counter)
  return (
    <div>
        <h1>this is counter</h1>
      <h1>{counter}</h1>
    </div>
  )
}
