import React from "react";
import "./Home.css";
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

const Home = () => {
  const [projectList, setProjectList] = useState([]);

  console.log(localStorage.getItem("user-token"))

  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(()=>{

    async function getProjectList(){
        try {
            const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projects/", config);
            console.log("Get projectList Data",projList.data);
            setProjectList(projList.data);
        }catch (error){
            console.log("Data fetching Error Occured in Project List");
        }
    }

    getProjectList();

}, []);

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
                    <Link to={'/manager/addProjectPage'} style={{textDecoration: 'None', color:'white'}}>Add Project</Link>
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
                <th>View Details</th>
              </tr>
            </thead>

            <tbody>
              {/* <tr>
                <td>1</td>
                <td>Mark</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>In Progress</td>
                <td>
                 <Link to={'/manager/projectDetails'}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Done</td>
                <td>
                <Link to={'/manager/projectDetails'}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Not Started</td>
                <td>
                <Link to={'/manager/projectDetails'}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Larry the Bird</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Not Started</td>
                <td>
                <Link to={'/manager/projectDetails'}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Larry the Bird</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>Not Started</td>
                <td>
                <Link to={'/manager/projectDetails'}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                </td>
              </tr> */}

                { projectList.map((x, index) =>{
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.project_name }</td>
                        <td>{x.start_date}</td>
                        <td>{x.end_date}</td>
                        <td>
                          <Link to={`/manager/projectDetails/${x.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
                        </td>
                      </tr>   
                    )
                }
          )}

            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
