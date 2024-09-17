
import './App.css'
import Btn from './components/btn'
import Card from './components/Card'

function App() {


  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Btn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </>
  )
}

export default App