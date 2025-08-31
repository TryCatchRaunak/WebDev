import { useSelector } from "react-redux"

const Navbar = () => {

    const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <p>I am a Navbar and counter is {count}</p>
    </div>
  )
}

export default Navbar
