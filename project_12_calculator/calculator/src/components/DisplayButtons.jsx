import React from 'react'
import Button from './Button'

function DisplayButtons({buttonvalues}) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];


  return (
    <div className='sub-conatiner'>
     
    {buttonNames.map((item)=> <Button key={item} buttonvalues={buttonvalues} items={item}></Button>)} 
      
      
     



    </div>
  )
}

export default DisplayButtons
