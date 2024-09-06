import React from 'react'

function Controls() {
  return (
    <>
     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success" 
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning" 
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          
        />
        <button type="button" className="btn btn-info" >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"  
        >
          Subtract
        </button>
      </div>
      
    </>
  )
}

export default Controls
