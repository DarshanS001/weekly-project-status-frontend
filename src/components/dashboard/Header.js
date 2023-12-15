import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import ylogo from '../../images/ylogo.png';
import loginb from '../../images/loginb.PNG';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import logoutIcon from '../../images/logoutIcon.png';
import RegisterNowButton from '../../images/RegisterNowButton.webp';
import './Header.css';
import Sidebar from './Sidebar';
import { useLocation, useMatch } from "react-router-dom"
import axios from "axios";


export default function Header() {
  const [show, setShow] = useState(false);
  const [showSession, setShowSession] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const location = useLocation();
  const resetPageURL = useMatch("/resetpassword/:uid/:token/");
  console.log("location",location.pathname);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"));
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleShow = () => setShow(true);
  const handleShowSession = () => setShowSession(true);
    
  const handleLogout = () => {
      localStorage.clear("user-token");
      window.location.href = "/";
    };
    
    const handleClose = () => {
      setShow(false);
    }

    const handleCloseSession = () => {
      setShowSession(false);
    }
    
    // Code to clear localStorage token when user is closes the tab or reloads the Application
    if(location.pathname === '/'){
      localStorage.clear("user-token");
      console.log("cleared localStorage when sign in page comes",localStorage.getItem("user-token"));
    }

    // Code to get User Data from API call
  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await axios.get(
          "http://127.0.0.1:8000/api/user/profile/",
          config
        );
        console.log("Get User Data", userData.data);
        setUserDetails(userData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in User Data");
        handleShowSession();
      }
    }

    getUserData();
  }, []);
  console.log("User Details:-", userDetails);
  console.log("User Details Array Length:-", userDetails.length);


  return (
    <div>
      <Navbar className="bg-body-tertiary " data-bs-theme="light">
      <Container>

        {location.pathname !== '/' && 
        location.pathname !== '/Register' && 
        location.pathname !== '/forgotPasswordPage' && 
        // location.pathname !== `/resetpassword/${uid}/${token}` 
        !resetPageURL
        ? <Sidebar/> : "" }

        <img src={ylogo} alt='logoimgage' style={{height:'50px',width:'120px',marginLeft:'20px'}}/>

        {location.pathname !== '/' && 
        location.pathname !== '/Register' && 
        location.pathname !== '/forgotPasswordPage' &&  
        // location.pathname !== '/resetpassword' 
        !resetPageURL 
        ? 
        <Link className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        :
        <Link className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        }
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className='text-light'>
           
           {location.pathname === '/forgotPasswordPage' ?
            <Link to={'/'} className='text-light' style={{textDecoration: 'none'}}><img src={loginb} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
            : ""
           }
          

          {location.pathname !== '/' && 
          location.pathname !== '/Register' && 
          location.pathname !== '/forgotPasswordPage' &&  
          // location.pathname !== `/resetpassword/${uid}/${token}` 
          !resetPageURL 
          ? 
              <img src={logoutIcon} alt='login - image' style={{height:'45px',width:'55px',marginRight:'-70px'}} onClick={handleShow}/>
            
            :
            " "
          }

          {location.pathname !== '/' && 
          location.pathname !== '/Register' && 
          location.pathname !== '/forgotPasswordPage' && 
          // location.pathname !== '/resetpassword' 
          !resetPageURL  
          ? 
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                  <Modal.Title className='fw-bold modaldesign'>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalbody'>
                  Are you sure you want to logout?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Link to={'/'}><Button variant="danger" onClick={handleLogout}>Logout</Button></Link>
                </Modal.Footer>
                </Modal>

                : ""}


          {location.pathname !== '/' && 
          location.pathname !== '/Register' && 
          location.pathname !== '/forgotPasswordPage' && 
          // location.pathname !== '/resetpassword' 
          !resetPageURL  &&
          userDetails.length === 0
          ? 
                <Modal
                show={showSession}
                onHide={handleCloseSession}
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                  <Modal.Title className='fw-bold modaldesign'>Time Out</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalbody'>
                  Your Session is Time Out !! Please Log Out.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleLogout}>
                    Log Out
                  </Button>
                </Modal.Footer>
                </Modal>

                : ""}
          
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  )
}