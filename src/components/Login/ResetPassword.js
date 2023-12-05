import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import "./ResetPassword.css";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password1,setPassword] = useState("");
  const [password2,setPassword1] = useState("");
  const {uid, token} = useParams();
  console.log("uid", uid);
  console.log("token", token);

  

  function validateForm() {
    return password1.length > 0 && password2.length>0
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('password:', password1);
    console.log('password:',password2)
  }
  axios({
    baseURL: `http://127.0.0.1:8000/api/user/reset-password/${uid}/${token}/`,
    method: "POST",
    data: {
      password:password1,
      password2:password2
    },
  })
  .then((res) => {
    if (res.status === 200) {
      console.log("result.data:",res.data);
      // alert("Success")
      window.location.href = "/";
    }
  })
  .catch((error) => {
    console.log("ERROR", error);
  });
    
    
    

  return (
    <div className="Reset">
      <Container className="heading">
        <h2>Reset Password</h2>
      </Container>

      <Container className="form">
        <Form onSubmit={handleSubmit}>
          <Container>
          <Form.Group size="lg" controlId="password1">
              <Form.Label className="mt-3"> New Password</Form.Label>

              <Form.Control
                type="password"
                value={password1}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password2">
              <Form.Label className="mt-3">Confirm Password</Form.Label>

              <Form.Control
                type="password"
                value={password2}
                onChange={(e) => setPassword1(e.target.value)}
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
