import './App.css'
import { useState } from 'react'

function App() {

  const handleClick = () => {
    alert("Hey, I am clicked")
  }

  // const handleMouseOver = () => {
  //   alert("Hey, I am red div")
  // }

  // const [name, setName] = useState("Raunak")
  const [form, setForm] = useState({
    // email: "",
    // phone: ""
  })
  
  const handleChange = (e) => {
    // setName(e.target.value)
    // setForm(e.target.name)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am red div
      </div> */}

      <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  )
}

export default App
