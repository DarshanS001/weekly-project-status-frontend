import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidebar.css';
import Navbar_Icon from '../../images/Navbar_Icon.png';
import projectIcon from '../../images/projectIcon.png';
import reportsIcon from '../../images/reportsIcon.png';
import userIcon from '../../images/userIcon.png';
import profileIcon from '../../images/profileIcon.png';
import settingIcon from '../../images/settingIcon.png';
import newsidebaricon from '../../images/newsidebaricon.png';
function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
     
      <img src={newsidebaricon} alt='Navbar_Icon' style={{height:'35px',width:'55px',marginLeft:'-50px'}} onClick={handleShow}/> 

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title className='fs-2 fw-bold' style={{fontFamily: 'Apple Chancery'}}>
                   Manager Dashboard
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='toggler'>
                   <Nav className="justify-content-end flex-grow-1 pe-3">
                   <Nav.Link className='text-white fs-5 fw-bold sidebarcontent' href="#action1"><img src={projectIcon} alt='projectIcon - image' style={{height:'55px',width:'65px',marginRight:'0px'}}/>Projects</Nav.Link>
                   <Nav.Link className='text-white fs-5 fw-bold sidebarcontent' href="#action2"><img src={reportsIcon} alt='projectIcon - image' style={{height:'55px',width:'65px',marginRight:'0px'}}/>Weekly Reports</Nav.Link>
                   <Nav.Link className='text-white fs-5 fw-bold sidebarcontent' href="#action2"><img src={userIcon} alt='projectIcon - image' style={{height:'55px',width:'65px',marginRight:'0px'}}/>Users</Nav.Link>
                   <Nav.Link className='text-white fs-5 fw-bold sidebarcontent' href="/manager/managerProfile"><img src={profileIcon} alt='projectIcon - image' style={{height:'55px',width:'65px',marginRight:'0px'}}/>Profile</Nav.Link>
                   <Nav.Link className='text-white fs-5 fw-bold sidebarcontent' href="/manager/settings"><img src={settingIcon} alt='projectIcon - image' style={{height:'55px',width:'65px',marginRight:'0px'}}/>Settings</Nav.Link>
                   </Nav>
                
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}

export default Sidebar;