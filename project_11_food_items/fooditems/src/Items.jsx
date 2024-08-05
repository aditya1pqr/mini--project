import React from 'react'
import style from "./Items.module.css"

function Items() {
  return (
    <div>
      <ul className="list-group">
             <li className="list-group-item">An item <button className={`${style.but}  btn btn-info`}>bye Now</button></li>
              <li className="list-group-item">A second item<button className={`${style.but}  btn btn-info`}>bye Now</button></li>
              <li className="list-group-item">A third item<button className={`${style.but}  btn btn-info`}>bye Now</button></li>
              <li className="list-group-item">A fourth item<button className={`${style.but}  btn btn-info`}>bye Now</button></li>
              <li className="list-group-item">And a fifth one<button className={`${style.but}  btn btn-info`}>bye Now</button></li>
       </ul>
    </div>
  )
}

export default Items
