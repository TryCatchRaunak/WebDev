/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function App() {
  const [value, setValue] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am good todo"
    },
    {
      title: "Hello",
      desc: "I am better todo"
    },
    {
      title: "Good Morning",
      desc: "I am the best Todo"
    }
  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //     {/* <div className="Todo">I am Todo</div>) */}
  //     <div className="m-4 border border-1 border-purple-400">
  //       <div className="Todo">{Todo.title}</div>
  //       <div className="Todo">{Todo.desc}</div>
  //     </div>
  //   </>)
  // }
  // We can also make small components inside the main component like this

  return (
    <>
      <div className="App">
        <Navbar logoText="TryCatchRaunak" />
        {/* {showBtn?<button>I will shown only when second button is clicked</button>: "Null"} */}
        {/* we can do it in a better way */}
        {showBtn && <button>I will shown only when second button is clicked</button>}
        <div className="value">
          {value}
        </div>
        {/* <Todo /> */}
        {todos.map(todo => {
          // return <Todo key={todo.title} todo={todo}/>
          return <div key={todo.title} className="m-4 border-1 border-purple-400">
            <div className="Todo">{todo.title}</div>
            <div className="Todo">{todo.desc}</div>
          </div>
          // This is the ideal way to make small components inside the main component
        })}
        <button onClick={() => { setValue(value + 1) }}>Click Me</button>
        <button onClick={() => { setShowBtn(!showBtn) }}>Toggle me <code>True or False</code></button>
        <Footer />
      </div>
    </>
  )
}

export default App
