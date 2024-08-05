import './App.css'
import Fooditems from './Fooditems'
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorMessage from './ErrorMessage'
import Container from './Container'
import Inputs from './Inputs'

function App() {
  
  return (
    <Container>
     <h1 className='heading'>Healthy Food</h1>
     <Inputs></Inputs>
     <ErrorMessage></ErrorMessage>
     <Fooditems></Fooditems>
    </Container>
  )
}

export default App
