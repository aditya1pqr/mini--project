import React from 'react'

function Button({items , buttonvalues}) {
  return (
    <div>
      <button className='button' onClick={()=>buttonvalues(items)}>{items}</button>
    </div>
  )
}

export default Button
