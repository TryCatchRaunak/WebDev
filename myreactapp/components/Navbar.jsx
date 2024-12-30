import 'react'

// const Navbar = ({logoText}) => {//This is a way

const Navbar = (props) => {//This is another way of including props into jsx
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
