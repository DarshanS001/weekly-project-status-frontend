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
export default function AllAdmin() {
 
  // const [admin,setAdmin] = useState([])
  const [id, setId] = useState("");
  const [adminList, setAdminList] = useState([]);
 
  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 
  useEffect(() => {
 
    async function getAdminList() {
      try {
        const adminList = await axios.get(`http://127.0.0.1:8000/api/user/adminlist/`, config);
        console.log("Get all managers list", adminList.data);
        setAdminList(adminList.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Manager List");
      }
    }
 
    getAdminList();
 
  }, []);
  return (
 
    <div >

      <Container className="AdminHeading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Admin List" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="naFaSistrixvbarScroll">
             
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand className="text-light">
                  <Button style={{backgroundColor:"#AE445A"}} size="lg" className="my-3">
                  <Link to={'/Register/'} style={{textDecoration: 'None', color:'white'}}>Add User</Link>
                  </Button>
                </Navbar.Brand>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      
      <Container className="AdminMainContainer">
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
            adminList.map((s, index) => (
              <tr style={{ outline: '' }}>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{s.user_name}</td>
                <td>{s.user_email}</td>
                <td>{s.phone}</td>
                <td>{s.designation}</td>
                <td>{s.user_type}</td>
                <td>
 
                  <Link to={`/admin/updateUser/${s.id}`}><img src='https://img.icons8.com/?size=2x&id=12082&format=png' alt='editimg' style={{ height: '25px', width: '25px', marginLeft: '30px', marginRight: '20px' }} /></Link>
                  <Link to={`/admin/UserProfile/${s.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
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
 