import React from 'react'
import "./Home.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { FaEye } from "react-icons/fa";
import Heading from "../Heading";
import Form from "react-bootstrap/Form";

import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';

const WeeklyReports = () => {

  const [projectList, setProjectList] = useState([]);
 
  

  useEffect(()=>{

    async function getProjectList(){
        try {
            // const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projects/", config);
            const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projectsapi/");
            console.log("Get projectList Data",projList.data);
            setProjectList(projList.data);
        }catch (error){
            console.log("Data fetching Error Occured in Project List");
        }
    }

    getProjectList();

}, []);

console.log('projectList:-', projectList)


  return (
    <>
      <Container className="Heading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading className="heading" Heading="Weekly Project Report List" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="naFaSistrixvbarScroll">
             
              

              <Form className="d-flex ms-auto">
                <div class="d-flex me-3" style={{ height: "50px" }}>
                  <div class="vr"></div>
                </div>

                
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
                <th>Report Tittle</th>
                <th>Week Start Date</th>
                <th>View Details</th>
              </tr>
            </thead>

            <tbody>

                { projectList.map((x, index) =>{
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.project_name }</td>
                        <td>{x.start_date}</td>
                        
                        <td>
                          <Link to='/manager/projectWeeklyReportOverview/'><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
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
  
  )
}

export default WeeklyReports