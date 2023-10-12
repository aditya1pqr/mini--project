import{useState} from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
   <div className="w-full flex flex-wrap h-screen"style={{backgroundColor:color}}>
    <div>
    <div className=" flex  justify-between bg-white mt-12 text-white">
     <button onClick={()=>setcolor("red")} className="bg-red-500 pr-2 pl-2 rounded-xl "style={{backgroundColor:"red"}}>RED</button>
     <button onClick={()=>setcolor("blue")} className="bg-blue-500 pr-2 pl-2 rounded-xl"style={{backgroundColor:"blue"}}>BLUE</button>
     <button onClick={()=>setcolor("green")} className="bg-green-500 pr-2 pl-2 rounded-xl"style={{backgroundColor:"green"}}>GREEN</button>
     <button onClick={()=>setcolor("black")} className="bg-black pr-2 pl-2 rounded-xl"style={{backgroundColor:"black"}}>BLACK</button>
     <button onClick={()=>setcolor("orange")} className="bg-orange-500 pr-2 pl-2 rounded-xl"style={{backgroundColor:"orange"}}>ORANGE</button>
     <button onClick={()=>setcolor("grey")} className="bg-grey-500 pr-2 pl-2 rounded-xl"style={{backgroundColor:"grey"}}>GREY</button>
     </div>
     </div>
     </div>
    
    </>
  )
}

export default App
