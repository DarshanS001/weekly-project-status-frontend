import React from 'react'
import './Heading.css'


const Heading = (props) => {
  return (
    <div>
      {props.textColor?
      <h2 style={{color:"white", fontWeight: 'bold', fontFamily: 'Apple Chancery'}} >{props.Heading}</h2>
      :
      <h2 style={{fontWeight: 'bold', fontFamily: 'Apple Chancery'}}>{props.Heading}</h2>
      }
        
    </div>
  )
}

export default Heading