import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './AllManagers.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Heading from "../Heading";
import { FaEye } from "react-icons/fa";
// import { ExportCSV } from './ExportCSV';
// import AdminHeader from './AdminHeader';
export default function AllManagers() {

  // const [admin,setAdmin] = useState([])
  const [id, setId] = useState("");
  const [managerList, setManagerList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {

    async function getManagerList() {
      try {
        const managerList = await axios.get(`http://127.0.0.1:8000/api/user/projectmanagerlist/`, config);
        console.log("Get all managers list", managerList.data);
        setManagerList(managerList.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Manager List");
      }
    }

    getManagerList();

  }, []);



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

    <div >
      <Container className="ManagerHeading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Project Managers" />
            </Navbar.Brand>
            {userDetails.user_type === "Admin" 
                    ? 
            <Navbar.Toggle aria-controls="navbarScroll" />
            : ""
            }
            <Navbar.Collapse id="naFaSistrixvbarScroll">
             
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand className="text-light">
                  
                    {userDetails.user_type === "Admin" 
                    ? 
                    <Button style={{backgroundColor:"#AE445A"}} size="lg" className="my-3">
                    <Link to={'/Register/'} style={{textDecoration: 'None', color:'white'}}>Add User</Link>
                    </Button>
                    : 
                    ""
                  }
                  
                 
                </Navbar.Brand>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      
      <Container className="ManagerMainContainer">
      <hr/>
        <Container>
          <Table striped bordered hover>
          <thead>
          <tr style={{ backgroundColor: 'hsl(244, 77%, 14%)' }}>
            <th style={{ outline: '', color: 'white' }} scope="col">S. No.</th>
            <th style={{ outline: '', textAlign: 'center', color: 'white' }} scope="col">Name</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Email</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Phone</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Designation</th>
            <th style={{ outline: '', color: 'white' }} scope="col">User Type</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            managerList.map((s, index) => (
              <tr style={{ outline: '' }}>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{s.user_name}</td>
                <td>{s.user_email}</td>
                <td>{s.phone}</td>
                <td>{s.designation}</td>
                <td>{s.user_type}</td>
                <td>
                  {
                    userDetails.user_type === "Admin" ?
                    <Link to={`/admin/updateUser/${s.id}`}><img src='https://img.icons8.com/?size=2x&id=12082&format=png' alt='editimg' style={{ height: '25px', width: '25px', marginLeft: '30px', marginRight: '20px' }} /></Link>
                    : ""
                  }
                  
                  <Link to={`/manager/managerProfile/allProjectsOfParticularManager/${s.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                </td>
              </tr>
            ))}
        </tbody>
            
          </Table>
        </Container>
      </Container>
      
    </div>
  )
}
 

