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
  const [searchProjectList, setSearchProjectList] = useState([]);
  const [search, setSearch] = useState({
    searchProject : ""
  })
  const { searchProject } = search;

  // Function for search input Change
  const onSearchChange = (e) =>{
    setSearch({...search, [e.target.name]:e.target.value});
  }
  console.log("searchText json", search);
  console.log("searchText", search["searchProject"]);

  // Code to fill the Empty Array for project name from projectList JSON 
  const projectNameArray = [];
  for(let i=0; i<projectList.length; i++){
    projectNameArray.push(projectList[i].project_name);
  }
  console.log("projectNameArray", projectNameArray);


// Code to fill the search submit
  let filtered;
  const searchSubmit = (e) =>{
    e.preventDefault();
      filtered = projectList.filter(project => 
      project.project_name.includes(search["searchProject"]));
      setSearchProjectList(filtered);
    
      if(search["searchProject"] === ""){
        alert("Project Search Not Found");
      }

        const projectNameArrayFilter = projectNameArray.filter(proj=>proj.includes(search["searchProject"]));
        console.log("Filtered Array:",projectNameArrayFilter);
      if(projectNameArrayFilter.length === 0){
        alert("Project Search Not Found");
      }
      
  }

  

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
            // const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projects/", config);
            const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projectsapi/", config);
            console.log("Get projectList Data",projList.data);
            setProjectList(projList.data);
        }catch (error){
            console.log("Data fetching Error Occured in Project List");
        }
    }

    getProjectList();

}, []);

console.log('projectList:-', projectList)
console.log("filtered List:", searchProjectList);

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
                  // onChange={e => setSearchVal(e.target.value)}
                  // value={searchedProject}
                  
                  // size="lg"
                  name="searchProject"
                  value={searchProject}
                  onChange={(e)=>onSearchChange(e)}
                />
                <Button style={{backgroundColor:"#183D3D"}} onClick={searchSubmit}><FaSistrix style={{ fontSize: "20px" }}/></Button>
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

                {searchProjectList.length > 0 ? searchProjectList.map((x, index) => {
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
                }) :
                
                projectList ?  projectList.map((x, index) =>{
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
                <td><h3>Please Add Projects</h3></td>
                <td></td>
                <td></td>
              </tr>

                }

            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default Home;
