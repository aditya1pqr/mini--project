import React, { Children } from 'react'
import Items from './Items'
import { useState } from 'react'

function Fooditems({foodItmes}) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (items, event) => {
  
    let newItems = [...activeItems, items];
    setActiveItems(newItems);
  };

 
  return (
  
    <div>
      { foodItmes.map((items)=>(<Items bought={activeItems.includes(items)} handlechange={(event)=> onBuyButton(items,event)} items={items}></Items>)
        
      )}
      
    </div>
  )
}

export default Fooditems
