import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count, setCount}}/>
        <Navbar count={count}/>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      <counterContext.Provider/>
    </>
  )
}

export default App
