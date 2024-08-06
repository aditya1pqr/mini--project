import './App.css'
import Fooditems from './Fooditems'
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorMessage from './ErrorMessage'
import Container from './Container'
import Inputs from './Inputs'
import { useState } from 'react'

function App() {
  let foodItmes = ["Salad", "Fruits", "Dal", "Roti", "Sabji"];
  const [itemsdata, setitemsdata] = useState(foodItmes)
 const handlekeyDown = (event)=>{
  if(event.key === "Enter")
  {
    console.log(event.target.value)
    let newitems=event.target.value;
    let newarr = [...itemsdata, newitems]
    setitemsdata(newarr);
    
  }
   
 }

 
  return (
    <Container >
     <h1 className='heading'>Healthy Food</h1>
     <Inputs onkeyDown={handlekeyDown} ></Inputs>
     <ErrorMessage foodItmes={itemsdata}></ErrorMessage>
     <Fooditems foodItmes={itemsdata}></Fooditems>
    </Container>
  )
}

export default App
