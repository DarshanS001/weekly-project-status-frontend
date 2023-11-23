import React from 'react'
import './Heading.css'


const Heading = (props) => {
  return (
    <div>
      {props.textColor?
      <h2 style={{color:"white"}} >{props.Heading}</h2>:
      <h2 >{props.Heading}</h2>
      }
        
    </div>
  )
}

export default Heading