import React from 'react'
import style from "./Items.module.css"

function Items({items}) {
  return (
    <div>
      <ul className="list-group">
             <li className="list-group-item">{items}<button className={`${style.but}  btn btn-info`}>Bye Now</button></li>
             
       </ul>
    </div>
  )
}

export default Items
