import React from "react";
import "./AdminList.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { FaEye, FaSistrix } from "react-icons/fa";
import Heading from "../Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminList = () => {
     const [adminList, setAdminList] = useState([]);

// Code to fill the Empty Array for project name from projectList JSON 
   const adminNameArray = [];
   for(let i=0; i<adminList.length; i++){
     adminNameArray.push(adminList[i].user_name);
   }
   console.log("adminNameArray", adminNameArray);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };



   // Code to get project list from API call
   useEffect(()=>{

     async function getAdminList(){
         try {
             // const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projects/", config);
             const admList = await axios.get("http://127.0.0.1:8000/api/user/adminlist/", config);
             console.log("Get adminList Data",admList.data);
            setAdminList(admList.data);
         }catch (error){
             console.log("Data fetching Error Occured in admin List");
         }
     }

     getAdminList();

 }, []);

 console.log('adminList:-', adminList)


  return (
    <>
      <Container className="Heading">
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
                  <Link to={'/admin/addUserPage'} style={{textDecoration: 'None', color:'white'}}>Add User</Link>
                  </Button>
                </Navbar.Brand>
              </Navbar.Collapse>
           
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
            <Container className="MainContainer">
                <Container>
                <Table striped bordered hover variant="light">

            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>User Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

            {
                adminList ?  adminList.map((x, index) =>{
                  return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{x.user_name}</td>
                      <td>{x.user_email}</td>
                      <td>{x.mobile_no}</td>
                      <td>{x.user_type}</td>
                
                      <td>
                        <Link to={`/admin/adminList/${x.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                      </td>
                    </tr>   
                  )
              }
        ) :
              <tr>
                <td></td>
                <td></td>
                <td><h3>Please Add user</h3></td>
                <td></td>
                <td></td>
              </tr>

                }
            </tbody>
            </Table>
        </Container>
    </Container>
    </>
    );
};

export default AdminList;
