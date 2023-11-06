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
import WeekReportModal from "./AddWeekData/WeekReportModal";



const ProjectDetails = () => {
  // To get Id....
  const { id } = useParams();
  console.log("id:",id);
  const [projectDetails, setProjectDetails] = useState([]);

  // for modal show hide
  const [modalShow, setModalShow] = useState(false);
  console.log('modalShow', modalShow);


  useEffect(()=>{

    async function getProjectDetails(){
        try {
            // const projDetails = await axios.get(`http://127.0.0.1:8000/api/projectplan/projects/details/${id}/`);
            const projDetails = await axios.get(`http://127.0.0.1:8000/api/projectplan/projectsapi/${id}/`);
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
                  <Button 
                  style={{backgroundColor:"#AE445A", marginBottom:'3px'}} 
                  size="lg" 
                  className="ms-2"
                  onClick={() => setModalShow(true)}
                  >
                    {/* <Link to={'/manager/addWeekDataPage1'} style={{textDecoration: 'None', color:'white'}}>Add Week Data</Link> */}
                    Add Week Data
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

        <Container>

              <p><b>Client Name:</b>  {projectDetails.client_name}</p>
              <p><b>Project Manager Name:</b>  {projectDetails.manager_name }</p>
              <p><b>Project Summary:</b>  {projectDetails.summary }</p>
              <p><b>Start Date:</b>  {projectDetails.start_date}</p>
              <p><b>End Date:</b>  {projectDetails.end_date}</p>
              
        </Container>
  
      </Container>
      
                <WeekReportModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  projectID = {id}
                  />
    </>
  )
}

export default ProjectDetails