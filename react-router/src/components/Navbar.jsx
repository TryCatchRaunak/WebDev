import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/about"><li>About</li></Link>
        </nav>
    </div>
  )
}

export default Navbar