import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';

const RegisterPage = () => {
  let navigate = useNavigate();

  const [togglePassword1, setTogglePassword1] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);
  const [userRegistration, setUserRegistration] = useState({
    user_email: "",
    user_name: "",
    user_type: "",
    designation: "",
    password:"",
    password2: "",
  });
  
  const { user_email, user_name, user_type, designation, password, password2} = userRegistration;

  const onInputChange = (e) => {
    setUserRegistration({ ...userRegistration, [e.target.name]: e.target.value });
  };


  const togglePass1 = () => {
    setTogglePassword1(!togglePassword1);
  }

  const togglePass2 = () => {
    setTogglePassword2(!togglePassword2);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form Validation
    if(userRegistration.user_email.length === 0){
      // alert("Please enter valid email");
      const showToastEmailMessage = () => {
        toast.error("Please enter valid email", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      showToastEmailMessage();
    }else if(userRegistration.password.length === 0){
      // alert("Please enter Password");
      const showToastPassLenMessage = () => {
        toast.error("Please enter Password", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      showToastPassLenMessage();
    }else if( userRegistration.password !== userRegistration.password2){
      // alert("Please enter same password");
      const showToastPassSameMessage = () => {
        toast.error("Please enter same password", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      showToastPassSameMessage();
    }else if( userRegistration.user_type === "Select User Type"){
      // alert("Please Select User Type");
      const showToastUserTypeMessage = () => {
        toast.error("Please Select User Type", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      showToastUserTypeMessage();
    }else if( userRegistration.user_name === ""){
      // alert("Please Enter User Name");
      const showToastUserNameMessage = () => {
        toast.error("Please Enter User Name", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      showToastUserNameMessage();
    }else{

          console.log('Registration data Array:',userRegistration);
            // Api Calling
            axios({
              baseURL: 'http://127.0.0.1:8000/api/user/register/',
              method: "POST",
              data: {
                user_email: user_email,
                user_name: user_name,
                user_type: user_type,
                // designation: designation,
                password: password,
                password2: password2,
              },
            })
              .then((res) => {
                if (res.status === 201) {
                  console.log("result.data:",res.data);
                  alert("Registration Successful !!");
                  navigate(-1);
                }
              })
              .catch((error) => {
                console.log("ERROR", error);
                // alert("Error Orrured In Registration");
                const showToastRegisterErrMessage = () => {
                  toast.error("Error Orrured In Registration", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                };
                showToastRegisterErrMessage();
              });
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

              <Form.Select aria-label="Default select example"
                  name="user_type"
                  value={user_type}
                  onChange={(e) => onInputChange(e)}
                  >
                    <option>Select User Type</option>
                    <option value="Admin">Admin</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Management">Management</option>
                  </Form.Select>
            </Form.Group>

            

            {/* <Form.Group size="lg" controlId="designation">
              <Form.Label className="mt-3">Designation</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="designation"
                value={designation}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group> */}

            <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3">Password</Form.Label>

              <InputGroup className="mb-3">

                {togglePassword1 ? 
                  <Form.Control
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
                :
                <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
                }

              <InputGroup.Text id="basic-addon2"><FaEye onClick={togglePass1} style={{ fontSize: "20px", color:'black' }} /></InputGroup.Text>
              </InputGroup>

              
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label className="mt-3">Re-Enter Password</Form.Label>

              <InputGroup className="mb-3">

                {togglePassword2 ? 
                  <Form.Control
                  type="text"
                  name="password2"
                  value={password2}
                  onChange={(e) => onInputChange(e)}
                />
                :
                <Form.Control
                type="password"
                name="password2"
                value={password2}
                onChange={(e) => onInputChange(e)}
              />
                }

              <InputGroup.Text id="basic-addon2"><FaEye onClick={togglePass2} style={{ fontSize: "20px", color:'black' }} /></InputGroup.Text>
              </InputGroup>
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

        <ToastContainer />
      </Container>

    </div>
  )
}

export default RegisterPage