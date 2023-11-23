import React from 'react';
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

const ManagementList = () => {
  return (
    <>
      <Container className="Heading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Management List" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="naFaSistrixvbarScroll">
             
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand className="text-light">
                <Button style={{backgroundColor:"#AE445A"}} size="lg" className="my-3">
                  <Link to={'/admin/addUser'} style={{textDecoration: 'None', color:'white'}}>Add User</Link>
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
                <th>Mob. Num</th>
                <th>User Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>


                      <tr >
                        <td>1</td>
                        <td>abcd</td>
                        <td>abcd</td>
                        <td>abcd</td>
                        <td>abcd</td>
                        <td>abcd</td>
                      </tr> 
                
                      <tr>
                      <td>2</td>
                      <td>abcd</td>
                      <td>abcd</td>
                      <td>abcd</td>
                      <td>abcd</td>
                      <td>abcd</td>
                    </tr>   
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  )
}

export default ManagementList
