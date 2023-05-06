import React, { useState } from 'react';

export default function PxToRemConverter() {
  const [pixelValue, setPixelValue] = useState(16); 
  const [remValue, setRemValue] = useState('1rem'); 

  function handlePixelChange(event) {
    const newValue = parseInt(event.target.value, 10); 
    setPixelValue(newValue);
    setRemValue(`${newValue / 16}rem`); 
  }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"10rem",border:"solid red"}}>
    <label >
        Pixel value:
        <input type="number" value={pixelValue} onChange={handlePixelChange} />
      </label>
      <p>To rems: {remValue}</p>
 </div>
);
}