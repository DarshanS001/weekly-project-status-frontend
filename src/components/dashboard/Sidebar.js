import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidebar.css";

import projectIcon from "../../images/projectIcon.png";
import reportsIcon from "../../images/reportsIcon.png";
import userIcon from "../../images/userIcon.png";
import profileIcon from "../../images/profileIcon.png";
import settingIcon from "../../images/settingIcon.png";
import newsidebaricon from "../../images/newsidebaricon.png";
import { useState, useEffect } from "react";
import axios from "axios";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  // Functions to show close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"));
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

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
      }
    }

    getUserData();
  }, []);

  console.log("User Details:-", userDetails.user_type);

  return (
    <>
      <img
        src={newsidebaricon}
        alt="Navbar_Icon"
        style={{ height: "35px", width: "55px", marginLeft: "-50px" }}
        onClick={handleShow}
      />

      {userDetails.user_type === "Project Manager" ? (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="fs-2 fw-bold"
              style={{ fontFamily: "Apple Chancery" }}
            >
              Manager Dashboard
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="toggler">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/manager/home"
              >
                <img
                  src={projectIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Projects
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/manager/allProjectWeeklyReports/"
              >
                <img
                  src={reportsIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Weekly Reports
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="#action2"
              >
                <img
                  src={userIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Users
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/manager/managerProfile"
              >
                <img
                  src={profileIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Profile
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/manager/settings"
              >
                <img
                  src={settingIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Settings
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        " "
      )}

      {userDetails.user_type === "Admin" ? (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="fs-2 fw-bold"
              style={{ fontFamily: "Apple Chancery" }}
            >
             
              <Nav.Link
                className="text-dark fs-12 fw-bold sidebarcontent"
                href='/AdminPage'
              >
                 Admin Dashboard
              </Nav.Link>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="toggler">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href='/Register/'
              >
                <img
                  src={projectIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Add User
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="#"
              >
                <img
                  src={reportsIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Users
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/admin/profile"
              >
                <img
                  src={userIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Profile
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/manager/settings"
              >
                <img
                  src={profileIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Settings
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        " "
      )}

      {userDetails.user_type === "Management" ? (
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="fs-2 fw-bold"
              style={{ fontFamily: "Apple Chancery" }}
            >
              Management Dashboard
            </Offcanvas.Title>
          </Offcanvas.Header>
          
          <Offcanvas.Body className="toggler">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/admin/managers/"
              >
                <img
                  src={projectIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Project Managers
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="#"
              >
                <img
                  src={reportsIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Users
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/management/managementProfile"
              >
                <img
                  src={userIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Profile
              </Nav.Link>
              <Nav.Link
                className="text-white fs-5 fw-bold sidebarcontent"
                href="/manager/settings"
              >
                <img
                  src={profileIcon}
                  alt="projectIcon - image"
                  style={{ height: "55px", width: "65px", marginRight: "0px" }}
                />
                Settings
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        " "
      )}
    </>
  );
}

export default Sidebar;
