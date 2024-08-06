import React from 'react'
import style from "./Items.module.css"

function Items({items,bought, handlechange}) {
  return (
    <div>
      <ul className="list-group">
             <li className={`list-group-item ${bought && "active"}`}>{items}<button onClick={ handlechange} className={`${style.but}  btn btn-info`}>Bye Now</button></li>
             
       </ul>
    </div>
  )
}

export default Items
