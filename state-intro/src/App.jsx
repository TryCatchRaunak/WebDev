import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)//useState

  useEffect(() => {
    alert('Hey welcome to my page')
  }, [])//useEffect(function, array) hook
  
  useEffect(() => {
    alert('Count was changed')
  }, [count])

  return (
    <>
      <Navbar color={"blue" + "-navy"} />
      <div>This count is {count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Update Count</button>
    </>
  )
}

export default App
