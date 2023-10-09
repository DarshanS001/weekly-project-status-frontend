import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import './Header.css';
import Sidebar from './Sidebar';

export default function Header() {

   
  return (
    <div>
        <div className='upper-header'>

        <Navbar data-bs-theme="dark">
          
        <Container>
          
          <img src='https://www.hfsresearch.com/wp-content/uploads/5c93780b35566938454434.png' alt='logoimgage' style={{height:'55px',width:'130px',marginLeft:'0px'}}/>
          
          <Navbar.Brand className='fs-2 fw-bold' href="#home" style={{fontFamily: 'Apple Chancery',color: 'white',marginLeft:'-400px'}}>Weekly Status Report Application</Navbar.Brand>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           */}
           <Navbar.Brand href="#home" style={{fontFamily: 'Apple Chancery',color: 'white'}}>Login</Navbar.Brand>
     
            
              

            
        </Container>
      </Navbar>
        </div>
    </div>
  )
}
