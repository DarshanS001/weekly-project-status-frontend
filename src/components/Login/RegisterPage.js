import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  let navigate = useNavigate();

  const [userRegistration, setUserRegistration] = useState({
    user_email: "",
    user_name: "",
    user_type: "",
    password:"",
    password2: "",
  });
  
  const { user_email, user_name, user_type, password, password2} = userRegistration;

  const onInputChange = (e) => {
    setUserRegistration({ ...userRegistration, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form Validation
    if(userRegistration.user_email.length === 0){
      alert("Please enter valid email")
    }else if(userRegistration.password.length === 0){
      alert("Please enter Password")
    }else if( userRegistration.password !== userRegistration.password2){
      alert("Please enter same password")
    }else{

          console.log('Registration data Array:',userRegistration);
            // Api Calling
          try{
            console.log("API Call");
            // await axios.post('http://127.0.0.1:8000/api/projectplan/projects/',userRegistration)
            alert("Registration Successfull")
          }catch(error){
            console.log('error:', error);
            console.log("error occur in data post");
          }

    }

    
    
  }

  return (
    <div className="Register">
      <Container className="heading">
        <h2>Registration</h2>
      </Container>

      <Container className="form">
        <Form onSubmit={handleSubmit}>
          
          <Container>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                name="user_email"
                value={user_email}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="userName">
              <Form.Label className="mt-3">User Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="user_name"
                value={user_name}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="userType">
              <Form.Label className="mt-3">User Type</Form.Label>
              <Form.Control
                autoFocus
                type="select"
                name="user_type"
                value={user_type}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3">Password</Form.Label>

              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3">Re-Enter Password</Form.Label>

              <Form.Control
                type="password"
                name="password2"
                value={password2}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
            
            <div className="d-grid gap-1 mt-4">
            <Button style={{backgroundColor:"#A2678A"}} 
                    size="lg"
                    type="submit"
                    className="mb-3">
                  Register
            </Button>
          </div>

          </Container>

        </Form>
      </Container>

    </div>
  )
}

export default RegisterPage