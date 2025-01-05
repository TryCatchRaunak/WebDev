import 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card1" description="This is the 1st card"/>
        <Card title="Card2" description="This is the 2nd card"/>
        <Card title="Card3" description="This is the 3rd card"/>
        <Card title="Card4" description="This is the 4th card"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
