import React from 'react'
import "./AddProject.css"; 

export default function AddProject() {
  return (
    <div className="App"> 
    <h1 className='ms-3 fs-3 fw-bold text-dark'>Add Project</h1> 
    <fieldset> 
        <form action="#" method="get"> 
            <label for="firstname">First Name*</label> 
            <input 
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter First Name"
                required 
            /> 
            <br /><br /> 
            <label for="lastname">Last Name*</label> 
            <input 
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter Last Name"
                required 
            /> 
            <br /><br /> 
            
            <button type="submit" value="Submit"> 
                Submit 
            </button> 
        </form> 
    </fieldset> 
</div> 
); 
} 

