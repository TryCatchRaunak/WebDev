import { useEffect, useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)//useState
  let a = 0;

  useEffect(() => {
    alert('Hey welcome to my page')
  }, [])//useEffect(function, array) hook

  useEffect(() => {
    alert('Count was changed')
  }, [count])

  useEffect(() => {
    console.log(`re-rendering and the value of a is ${a + 1}`)//but this will not update the value of a because everytime the useEffect() function runs the initial value of a=0 is re-assigned to the variable. To solve this issue react offers useRef() function
  }, [count])


  //USE CASE 1 FOR useRef() hook
  const a = useRef(0)//useRef() hook

  useEffect(() => {
    a.current = a.current + 1
    console.log(`Re-rendering and the value of a is ${a.current}`)
  })

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
