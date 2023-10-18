import React from "react";
import "./ProjectDetails.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Heading from "../Heading";

import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log("id:",id);
  const [projectDetails, setProjectDetails] = useState([]);


  useEffect(()=>{

    async function getProjectDetails(){
        try {
            const projDetails = await axios.get(`http://127.0.0.1:8000/api/projectplan/projects/details/${id}/`);
            console.log("Get projectList Data",projDetails.data);
            setProjectDetails(projDetails.data);
        }catch (error){
            console.log("Data fetching Error Occured in Project Details");
        }
    }

    getProjectDetails();

}, []);

  return (
    <>
        <Container className="Heading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading={projectDetails.project_name} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="naFaSistrixvbarScroll">
             
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand className="text-light">
                  <Button style={{backgroundColor:"#AE445A", marginBottom:'3px'}} size="lg" className="ms-2">
                    Add/Update Week Data
                  </Button>
                </Navbar.Brand>

                <Navbar.Brand className="text-light">
                  <Button style={{backgroundColor:"#AE445A", marginBottom:'3px'}} size="lg" className="ms-2">
                    <Link to={'/manager/projectWeeklyStatus'} style={{textDecoration: 'None', color:'white'}}>Weekly Status</Link>
                  </Button>
                </Navbar.Brand>
              </Navbar.Collapse>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>


      <Container className="MainContainer">
        
          {/* <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>PM Name</th>
                <th>Start Date</th>
                <th>Planned End Date</th>
                <th>Overall Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Mark</td>
                <td>12-01-2023</td>
                <td>30-03-2023</td>
                <td>In Progress</td>
              </tr>
            </tbody>

          </Table> */}

        <Container>

              <p><b>Client Name:</b>  {projectDetails.client_name}</p>
              <p><b>Project Manager Name:</b>  {projectDetails.manager_name }</p>
              <p><b>Project Summary:</b>  {projectDetails.summary }</p>
              <p><b>Start Date:</b>  {projectDetails.start_date}</p>
              <p><b>End Date:</b>  {projectDetails.end_date}</p>
              
        </Container>
  
      </Container>
      
    </>
  )
}

export default ProjectDetails