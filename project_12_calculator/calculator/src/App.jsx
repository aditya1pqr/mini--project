import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import DisplayButtons from './components/DisplayButtons'

function App() {
 const [newval, setnewval] = useState("") 
  const buttonvalues= (val)=>{
    if(val==='C'){
      setnewval("");

    }
    else if(val==='='){
      let result = eval(newval);
      setnewval(result);

    }else {
      const newDisplayValue = newval + val;
      setnewval(newDisplayValue);
    }
   

  }
  

  return (
    <>
    <div className='main-conatainer'>
      <Display value={newval}></Display>
      <DisplayButtons buttonvalues={buttonvalues}></DisplayButtons>



    </div>
      
    </>
  )
}

export default App
