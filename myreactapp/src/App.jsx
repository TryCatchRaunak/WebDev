import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App() {
  const [value, setValue] = useState(0)
  const [showBtn, setShowBtn] = useState(false)

  const Todo = () => {return(<>
  <div className="Todo">I am Todo</div></>)}
  // We can also make small components inside the main component like this

  return (
    <>
      <div className="App">
        <Navbar logoText="TryCatchRaunak"/>
        {/* {showBtn?<button>I will shown only when second button is clicked</button>: "Null"} */} 
        {/* we can do it in a better way */}
        {showBtn && <button>I will shown only when second button is clicked</button>}
        <div className="value">
          {value}
        </div>
        <Todo/>
        <button onClick={() => {setValue(value + 1)}}>Click Me</button>
        <button onClick={() => {setShowBtn(!showBtn)}}>Toggle me <code>True or False</code></button>
        <Footer/>
      </div>
    </>
  )
}

export default App
