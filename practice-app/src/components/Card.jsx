/* eslint-disable react/prop-types */
import 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src="https://www.zdnet.com/a/img/resize/a0dcec40a8cd8d2e1b3a9e12a05c2819622d20be/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="" width="233" style={{border: "2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default Card
