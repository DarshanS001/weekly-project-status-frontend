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

  const [projectReportList, setProjectReportList] = useState([]);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 

  useEffect(()=>{

    async function getProjectReportList(){
        try {
            const projReportList = await axios.get("http://127.0.0.1:8000/api/projectplan/weeklyreportapi/", config);
            console.log("Get projectList Data",projReportList.data);
            setProjectReportList(projReportList.data);
        }catch (error){
            console.log("Data fetching Error Occured in Project List");
        }
    }

    getProjectReportList();

}, []);

console.log('projectReportList:-', projectReportList)


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

                { projectReportList.map((x, index) =>{
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.title }</td>
                        <td>{x.week_start_date}</td>
                        <td>
                          <Link to={`/manager/projectWeeklyReportOverview/${x.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link> 
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