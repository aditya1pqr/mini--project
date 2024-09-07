import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Controls() {

  const dispatch = useDispatch()
  const inputvalue = useRef()
  
  
  const handleIncrement = () =>{
    dispatch({type:'INCREMENT'})

  }
  const handleDecrement = () =>{
    dispatch({type:'DECREMENT'})
  }

  const handleadd = () =>{
    dispatch({type:'add',
      payload:{
        num : inputvalue.current.value
      }
    })
    inputvalue.current.value = "";
  }
  const handlesub = () =>{
    dispatch({type:'sub',
      payload:{
        num : inputvalue.current.value
      }
    })
    inputvalue.current.value = "";
  }
  const handleprivacy = () =>{
    dispatch({type:'privacy'})

  }



  return (
    <>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success" 
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning" 
          onClick={handleprivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputvalue}
        />
        <button type="button" className="btn btn-info" onClick={handleadd} >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger" 
          onClick={handlesub} 
        >
          Subtract
        </button>
      </div>
      
    </>
  )
}

export default Controls
