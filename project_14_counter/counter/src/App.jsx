import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from './components/Container'
import Header from './components/Header'
import Controls from './components/Controls'
import DisplaCounter from './components/DisplaCounter'
function App() {
  
  return (
    <>
     <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplaCounter></DisplaCounter>
          <Controls></Controls>
        </div>
      </Container>
    </center>
    </>
  )
}

export default App
