import './App.css'
import Fooditems from './Fooditems'
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorMessage from './ErrorMessage'
import Container from './Container'
import Inputs from './Inputs'

function App() {
  let foodItmes = ["Salad", "Fruits", "Dal", "Roti", "Sabji"];
 
 
  return (
    <Container >
     <h1 className='heading'>Healthy Food</h1>
     <Inputs ></Inputs>
     <ErrorMessage foodItmes={foodItmes}></ErrorMessage>
     <Fooditems foodItmes={foodItmes}></Fooditems>
    </Container>
  )
}

export default App
