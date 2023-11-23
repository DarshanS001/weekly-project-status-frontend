import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import ylogo from '../../images/ylogo.png';
import loginb from '../../images/loginb.PNG';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import logoutIcon from '../../images/logoutIcon.png';
import RegisterNowButton from '../../images/RegisterNowButton.webp';
import './Header.css';
import Sidebar from './Sidebar';
import { useLocation } from "react-router-dom"

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
    const location = useLocation();
    console.log("location",location.pathname)

    const token = localStorage.getItem("user-token");
    console.log("token in Header Page",token);

    const handleLogout = () => {
      localStorage.clear();
    };
    
    const handleClose = () => {
      setShow(false);
    }
    


  return (
    <div>
      <Navbar className="bg-body-tertiary " data-bs-theme="light">
      <Container>

        {location.pathname !== '/' && location.pathname !== '/Register' ? <Sidebar/>: "" }

        <img src={ylogo} alt='logoimgage' style={{height:'50px',width:'120px',marginLeft:'20px'}}/>

        {location.pathname !== '/' && location.pathname !== '/Register' ? 
        <Link to={'/manager/home'} className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        :
        <Link className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        }
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className='text-light'>

           {location.pathname === '/' ? 
           <Link to={'/Register'} className='text-light' style={{textDecoration: 'none'}}><img src={RegisterNowButton} alt='Register - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
           :""
           }

           {location.pathname === '/Register' ?
            <Link to={'/'} className='text-light' style={{textDecoration: 'none'}}><img src={loginb} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
            : ""
           }
           
          
          {location.pathname !== '/' && location.pathname !== '/Register' ? 
            <Button style={{textDecoration: 'none',backgroundColor:'hsl(244, 77%, 14%)',borderColor:'hsl(244, 77%, 14%)'}} onClick={handleShow}>
              <img src={logoutIcon} alt='login - image' style={{height:'45px',width:'55px',marginRight:'-70px'}}/>
            </Button>
            :
            " "
          }

          {location.pathname !== '/' && location.pathname !== '/Register' ? 
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

                :""}

          
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  )
}