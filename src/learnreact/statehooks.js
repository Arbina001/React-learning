// import { useState } from 'react';
import React, { useState } from 'react';

export function Statebutton() {
  const[number,setnumber]=useState(2)
  const[theme,settheme]=useState("blue")
  function degits ( ) {
    setnumber (number => number +1)
    settheme ("red")
   
  }
  function input (){
    setnumber (number => number -1)
    settheme ("green")
    }
  //   setnumber(number => number-1)
  //  setnumber (number => number -1)
  
  return (
    <>
      <button onClick={input}>-</button>
      <span>{number}</span>
      <span>{theme}</span>
      <button onClick={degits}>+</button>
    </>
  );
} 
