import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('email:', email);
    console.log('password:', password);

    axios({
      baseURL: 'http://127.0.0.1:8000/api/user/login/',
      method: "POST",
      data: {
        user_email: email,
        password: password
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("result.data:",res.data);
          localStorage.setItem("user-token", res.data.token["access"]);
          window.location.href = "/WeeklyStatusReport";
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
        alert("Error!! Please provide valid credentials");
      });
  }

  return (
    <div className="Login">
      <Container className="heading">
        <h2>Sign In</h2>
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

            <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3">Password</Form.Label>

              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            
            <div className="d-grid gap-1 mt-4">
            <Button style={{backgroundColor:"#A2678A"}} 
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                    className="mb-3">
                  Sign In
            </Button>
          </div>

          </Container>

        </Form>
      </Container>
        <Container className="forgotPassword">
              <Link to={"/forgotPasswordPage"} className="me-3">Forgot Password?</Link>
          </Container>
    </div>
  );
};

export default LoginPage;
