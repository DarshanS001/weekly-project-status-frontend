import React from 'react'
import "./WeeklyStatus.css";
import Heading from "../Heading";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const WeeklyStatus = () => {
  return (
    <>
        <Container className="Heading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Project Weekly Status" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Brand className="text-light">
                  <Button style={{backgroundColor:"#AE445A", marginBottom:'3px'}} size="lg" className="ms-2">
                    <Link to={'/manager/projectDetails'} style={{textDecoration: 'None', color:'white'}}>Project Details</Link>
                  </Button>
            </Navbar.Brand>

          </Container>
        </Navbar>
      </Container>

      <Container className="MainContainer">
        
        <Container>
                    <Table striped bordered hover variant="light">
                    <thead>
                    <tr>
                        <th>Weekly Status</th>
                        <th>Week Date</th>
                        <th>Status On Week</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td><Link to={'#'}>weekly Status 1</Link></td>
                        <td>12-01-2023</td>
                        <td>In Progress</td>
                    </tr>
                    <tr>
                        <td><Link to={'#'}>weekly Status 2</Link></td>
                        <td>12-01-2023</td>
                        <td>Done</td>
                    </tr>
                    <tr>
                        <td><Link to={'#'}>weekly Status 3</Link></td>
                        <td>12-01-2023</td>
                        <td>In Complete</td>
                    </tr>
                    </tbody>

                </Table>
        </Container>
  
      </Container>

    </>
  )
}

export default WeeklyStatus