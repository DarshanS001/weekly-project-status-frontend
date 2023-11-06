import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import ylogo from '../../images/ylogo.png';
import loginb from '../../images/loginb.PNG';
import LogoutImage from '../../images/LogoutImage.jpg';
import RegisterNowButton from '../../images/RegisterNowButton.webp';
import './Header.css';
import Sidebar from './Sidebar';
import { useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation();
    console.log("location",location.pathname)

    const token = localStorage.getItem("user-token");

    const handleLogout = () => {
      localStorage.clear();
    };
    

  return (
    <div>
      <Navbar className="bg-body-tertiary" data-bs-theme="light">
      <Container>

        {location.pathname !== '/' ? <Sidebar/>:"" }

        <img src={ylogo} alt='logoimgage' style={{height:'55px',width:'130px',marginLeft:'20px'}}/>

        {token ? 
        <Link to={'/AdminHome'} className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        :
        <Link className="ms-3 fs-3 fw-bold text-light" style={{textDecoration: 'none',fontFamily: 'Apple Chancery'}}>Weekly Status Report Application</Link>
        }
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className='text-light'>

          {/* {location.pathname === '/' ? 
          <Link to={'/AdminHome'} className='text-light' style={{textDecoration: 'none'}}><img src={loginb} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
          : <Link to={'/'} className='text-light' style={{textDecoration: 'none'}} onClick={handleLogout}><img src={LogoutImage} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
           } */}
           {!token ? 
           location.pathname === '/' ? 
           <Link to={'/Register'} className='text-light' style={{textDecoration: 'none'}}><img src={RegisterNowButton} alt='Register - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
           :
           <Link to={'/'} className='text-light' style={{textDecoration: 'none'}}><img src={loginb} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
           : " "
           }
          
          {token ? 

            <Navbar.Brand>
            <Link to={'/'} className='text-light' style={{textDecoration: 'none'}} onClick={handleLogout}><img src={LogoutImage} alt='login - imgage' style={{height:'40px',width:'120px',marginRight:'-50px'}}/></Link>
            <Link to={'/adminPage'} className='ms-3'><Button style={{marginLeft:'50px'}}>Admin</Button></Link>
            </Navbar.Brand>
            :
            " "
          }
          
          

          
            
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}