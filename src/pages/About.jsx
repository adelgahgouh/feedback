import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function About() {
  return (
    <Card>
   <div className="about">
       <h1>About this project:</h1>
       <p>this is project to leave reviews and feedbacks about product made enirely from react js</p>
      <p>Version :1.0.0</p>
      <Link to={"/"}>Back to home</Link>
   </div>
   </Card>
  )
}

export default About