import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css';
import Navbar_Icon from '../../images/Navbar_Icon.png';


function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // <>
    //   {['xxl'].map((expand) => (
    //     <Navbar key={expand} expand={expand} className="bg-body-primary mb-3 ">
    //       <Container fluid>
            
    //         <Navbar.Toggle className='bg-body-dark' aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //         <Navbar.Offcanvas 
              
    //           id={`offcanvasNavbar-expand-${expand}`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //           placement="start"
    //         >
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title className='fs-2 fw-bold'  id={`offcanvasNavbarLabel-expand-${expand}` }>
    //               Manager Dashboard
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body className='toggler'>
    //             <Nav className="justify-content-end flex-grow-1 pe-3">
    //               <Nav.Link className='text-white fs-4' href="#action1">Projects</Nav.Link>
    //               <Nav.Link className='text-white fs-4' href="#action2">Weekly Reports</Nav.Link>
    //               <Nav.Link className='text-white fs-4' href="#action2">Users</Nav.Link>
    //               <Nav.Link className='text-white fs-4' href="#action2">Profile</Nav.Link>
    //               <Nav.Link className='text-white fs-4' href="#action2">Settings</Nav.Link>
    //               <Nav.Link className='text-white fs-4' href="#action2">Logout</Nav.Link>
    //             </Nav>
                
    //           </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //       </Container>
    //     </Navbar>
    //   ))}
    // </>

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
                   <Nav.Link className='text-white fs-4' href="#action2">Logout</Nav.Link>
                   </Nav>
                
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}

export default Sidebar;