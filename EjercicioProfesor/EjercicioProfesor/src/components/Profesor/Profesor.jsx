import React from 'react'
import { useState } from 'react'

const Profesor = ({initialState}) => {
  const [name, setName] = useState(initialState)
  const teacherYolanda = () =>{
    setName("Yolanda")
  }
  const teacherData = () =>{
    setName("Data")
  }
  const teacherReyes = () =>{
    setName("Reyes")
  }
  return (
    <div>
      <h2>Teacher Name:<span> {name}</span></h2> 
      <ul>
        <li><button onClick={teacherYolanda}>Yolanda</button></li>
        <li><button onClick={teacherData}>Data</button></li>
        <li><button onClick={teacherReyes}>Reyes</button></li>
      </ul>
    </div>
  )
}

export default Profesor