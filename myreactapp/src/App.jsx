import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'

function App() {
  const [value, setValue] = useState(0)
  return (
    <>
      <div className="App">
        <Navbar/>
        <div className="value">
          {value}
        </div>
        <button onClick={() => {setValue(value + 1)}}>Click Me</button>
      </div>
    </>
  )
}

export default App
