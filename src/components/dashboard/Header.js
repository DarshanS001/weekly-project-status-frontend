import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import ylogo from '../../images/ylogo.png';
import loginb from '../../images/loginb.PNG';
import './Header.css';
import Sidebar from './Sidebar';

export default function Header() {

   
  // return (
  //   <div>
  //       <div className='upper-header'>

  //       <Navbar data-bs-theme="dark">
  //       <Container>
  //         <img src='https://www.hfsresearch.com/wp-content/uploads/5c93780b35566938454434.png' alt='logoimgage' style={{height:'55px',width:'130px',marginLeft:'0px'}}/>
          
  //         <Navbar.Brand className='fs-2 fw-bold' href="#home" style={{fontFamily: 'Apple Chancery',color: 'white',marginLeft:'-400px'}}>Weekly Status Report Application</Navbar.Brand>
  //           {/* <Nav.Link href="#home">Home</Nav.Link>
  //           <Nav.Link href="#features">Features</Nav.Link>
  //           <Nav.Link href="#pricing">Pricing</Nav.Link>
  //          */}
  //          <Navbar.Brand href="#home" style={{fontFamily: 'Apple Chancery',color: 'white'}}>Login</Navbar.Brand>
  //       </Container>
  //     </Navbar>
  //       </div>
  //   </div>
  // )

  // -------------------------------------------------------
  return (
    <div>
      <Navbar className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <Sidebar/>
        <img src={ylogo} alt='logoimgage' style={{height:'55px',width:'130px',marginLeft:'20px'}}/>
        <Link to={'AdminHome'} className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className='text-light'>
          
          <Link to={'/LoginPage'} className='text-light' style={{textDecoration: 'none'}}><img src={loginb} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}