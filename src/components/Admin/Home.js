import React from "react";
import "./Home.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { FaEye, FaSistrix } from "react-icons/fa";
import Heading from "../Heading";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Home = () => {
  return (
    <>
      <Container className="Heading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Project List" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="naFaSistrixvbarScroll">
             
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand className="text-light">
                  <Button style={{backgroundColor:"#AE445A"}} size="lg" className="my-3">
                    Add Project
                  </Button>
                  <Button style={{backgroundColor:"#AE445A"}} size="lg" className="ms-2">
                    Weekly Project Report
                  </Button>
                </Navbar.Brand>
              </Navbar.Collapse>

              <Form className="d-flex ms-auto">
                <div class="d-flex me-3" style={{ height: "50px" }}>
                  <div class="vr"></div>
                </div>

                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  // size="lg"
                />
                <Button style={{backgroundColor:"#183D3D"}}><FaSistrix style={{ fontSize: "20px" }}/></Button>
              </Form>
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
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Planned End Date</th>
                <th>Overall Status</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>In Progress</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Done</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Not Started</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Larry the Bird</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Not Started</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Larry the Bird</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Not Started</td>
                <td>
                  <FaEye style={{ fontSize: "20px" }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
