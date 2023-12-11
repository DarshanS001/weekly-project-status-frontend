import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';

const ResetPassword = () => {
  const [password1,setPassword1] = useState("");
  const [password2,setPassword2] = useState("");
  const [togglePassword1, setTogglePassword1] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);
  const navigate = useNavigate();
  const { uid, token } = useParams();
  console.log("uid", uid);
  console.log("token", token);
  localStorage.setItem("ResetPassword-uid", uid);
  localStorage.setItem("ResetPassword-token", token);


  const togglePass1 = () => {
    setTogglePassword1(!togglePassword1);
  }

  const togglePass2 = () => {
    setTogglePassword2(!togglePassword2);
  }

  function validateForm() {
    if(password1.length > 0){
      return password1 === password2
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('password1:', password1);
    console.log('password2:', password2);

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
        alert("Password reset successfull");
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
   
  }
  
    

  return (
    <div className="Reset">
      <Container className="heading">
        <h2>Reset Password</h2>
      </Container>

      <Container className="form">
        <Form>
          <Container>
          <Form.Group size="lg" controlId="password1">
              <Form.Label className="mt-3"> New Password</Form.Label>

              <InputGroup className="mb-3">

                {togglePassword1 ? 
                  <Form.Control
                  type="text"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
                :
                <Form.Control
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
                }

              <InputGroup.Text id="basic-addon2"><FaEye onClick={togglePass1} style={{ fontSize: "20px", color:'black' }} /></InputGroup.Text>
              </InputGroup>

              
            </Form.Group>

            <Form.Group size="lg" controlId="password2">
              <Form.Label className="mt-3">Confirm Password</Form.Label>

              <InputGroup className="mb-3">

                  {togglePassword2 ? 
                    <Form.Control
                    type="text"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  :
                      <Form.Control
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  }

                  <InputGroup.Text id="basic-addon2"><FaEye onClick={togglePass2} style={{ fontSize: "20px", color:'black' }} /></InputGroup.Text>
                  </InputGroup>

            </Form.Group>
            
            <div className="d-grid gap-1 mt-4">
            <Button style={{backgroundColor:"#A2678A"}} 
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                    onClick={handleSubmit}
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
