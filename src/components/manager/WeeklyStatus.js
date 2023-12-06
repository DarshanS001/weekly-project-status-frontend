import React from 'react'
import "./WeeklyStatus.css";
import Heading from "../Heading";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye } from "react-icons/fa";

const WeeklyStatus = () => {
  // To get Id....
  const { id } = useParams();
  console.log("id in weekly status:",id);

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
            const projReportList = await axios.get(`http://127.0.0.1:8000/api/projectplan/projectweeklyreportapi/${id}/`, config);
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
              <Heading Heading="Project Weekly Status" />
            </Navbar.Brand>
           

            <Navbar.Brand className="text-light">
                  <Button style={{backgroundColor:"#AE445A", marginBottom:'3px'}} size="lg" className="ms-2">
                    <Link to={`/manager/projectDetails/${id}/`} style={{textDecoration: 'None', color:'white'}}>Project Details</Link>
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

export default WeeklyStatus