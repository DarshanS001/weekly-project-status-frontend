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
import { useParams } from "react-router-dom";

const AllProjectOfParticularManager = () => {
   // To get Id....
   const { id } = useParams();
   console.log("id:",id);

  const [projectList, setProjectList] = useState([]);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };


  // Code to get project list from API call
  useEffect(()=>{

    async function getProjectList(){
        try {
            const projList = await axios.get(`http://127.0.0.1:8000/api/projectplan/projectslistapi/${id}`, config);
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
              {projectList.length ? 
              <Heading Heading={`${projectList[0].manager_name}'s Project List`} />
              :
              <Heading Heading={`Manager's Project List`} />
              }
              
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
                <th>Project Name</th>
                <th>Start Date</th>
                <th>Planned End Date</th>
                <th>View Details</th>
              </tr>
            </thead>

            <tbody>

                {
                
                projectList.length ?  projectList.map((x, index) =>{
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
        ) :
              <tr>
                <td></td>
                <td></td>
                <td><h3>No Projects Yet</h3></td>
                <td></td>
                <td></td>
              </tr>

                }

            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  )
}

export default AllProjectOfParticularManager