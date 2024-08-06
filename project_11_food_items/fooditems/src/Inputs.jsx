import React from 'react'
import style from "./Inputs.module.css"

function Inputs({onkeyDown}) {
  return (
    
      <input onKeyDown={onkeyDown} type="text" className={style.foodInput}/>
    
  )
}

export default Inputs
