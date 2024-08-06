import React from 'react'
import Items from './Items'

function Fooditems({foodItmes}) {
 
  return (
   
    <div>
      { foodItmes.map((items)=>(<Items items={items}></Items>)
        
      )}
      
    </div>
  )
}

export default Fooditems
