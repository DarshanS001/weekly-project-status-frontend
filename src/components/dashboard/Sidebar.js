import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidebar.css';
import Navbar_Icon from '../../images/Navbar_Icon.png';


function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
     
      <img src={Navbar_Icon} alt='Navbar_Icon' style={{height:'55px',width:'70px',marginLeft:'-50px'}} onClick={handleShow}/> 

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title className='fs-3 fw-bold'>
                   Manager Dashboard
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='toggler'>
                   <Nav className="justify-content-end flex-grow-1 pe-3">
                   <Nav.Link className='text-white fs-4' href="#action1">Projects</Nav.Link>
                   <Nav.Link className='text-white fs-4' href="#action2">Weekly Reports</Nav.Link>
                   <Nav.Link className='text-white fs-4' href="#action2">Users</Nav.Link>
                   <Nav.Link className='text-white fs-4' href="#action2">Profile</Nav.Link>
                   <Nav.Link className='text-white fs-4' href="#action2">Settings</Nav.Link>
                   </Nav>
                
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}

export default Sidebar;