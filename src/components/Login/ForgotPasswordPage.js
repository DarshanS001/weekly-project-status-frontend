import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import "./ForgotPasswordPage.css";


const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  
  function validateForm() {
    return email.length > 0 ;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('email:', email);

    axios({
      baseURL: 'http://127.0.0.1:8000/api/user/send-reset-password-email/',
      method: "POST",
      data: {
        email: email,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("result.data:",res.data);
        alert("password reset email sent! kindly check your email.");
      }
    }).catch((error) => {
        console.log("ERROR", error);
      });

  }

  return (
    <div className="Forgot">
      <Container className="heading">
        <h2>Reset Password</h2>
      </Container>

      <Container className="form">
        <Form onSubmit={handleSubmit}>
          <Container>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-1 mt-4">
            <Button style={{backgroundColor:"#A2678A",margin:"5%"}} 
                    size="sm"
                    type="submit"
                    className="mb-3"
                    disabled={!validateForm()}
                    >
                  Send Link
            </Button>
          </div>

          </Container>

        </Form>
      </Container>
    </div>
  );
};

export default ForgotPasswordPage;
