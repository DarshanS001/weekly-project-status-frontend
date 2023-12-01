import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password1,setPassword1] = useState("");
  const [password2,setPassword2] = useState("");
  const navigate = useNavigate();
  

  function validateForm() {
    if(password1.length > 0){
      return password1 === password2
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('password1:', password1);
    console.log('password2:', password2);
    navigate("/");
   
  }

  return (
    <div className="Reset">
      <Container className="heading">
        <h2>Reset Password</h2>
      </Container>

      <Container className="form">
        <Form onSubmit={handleSubmit}>
          <Container>
          <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3"> New Password</Form.Label>

              <Form.Control
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3">Confirm Password</Form.Label>

              <Form.Control
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>
            
            <div className="d-grid gap-1 mt-4">
            <Button style={{backgroundColor:"#A2678A"}} 
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                    className="mb-3">
                 Submit
            </Button>
          </div>

          </Container>

        </Form>
      </Container>
    
    </div>
  );
};

export default ResetPassword;
