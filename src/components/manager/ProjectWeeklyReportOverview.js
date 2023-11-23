import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProjectWeeklyReportOverview.css";
import Table from "react-bootstrap/Table";

import { FaEye, FaSistrix } from "react-icons/fa";
import Heading from "../Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectWeeklyReportOverview = () => {
  const [projectList, setProjectList] = useState([]);
  return (
    
    <div style={{backgroundColor:'white'}}>
        <Container fluid>

      {/* Overall phases and status  */}
      <Row style={{marginLeft:'3%'}}>
        <Col className='Project-phase' style={{textAlign:'left',display:'flex'}}>
          <div className='Current-phase'> 
            <p>Current Phase : </p>
            <p>Overall Health :</p>
            <p>Project Name :</p>
            <p>PM Name :</p>
          </div>
        </Col>

        <Col className='Project-phase' style={{marginLeft:'2.5%',marginRight:'5%',textAlign:'left',display:'flex'}}>
          <div style={{textAlign:'left'}} className='Current-phase'>
           <p>Prepare :  <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />
           </p>
           <p>Explore : </p>
           <p>Realize : </p>
           <p>Deploy : </p>
            <p>Run : </p>
          </div>
        </Col>
      </Row>

      
 {/* phase wise timeline table */}
      <Row style={{marginLeft:'0%'}}>
      <Col>

      <Container className="Heading-PhaseWiseTimeline">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="High Level Phase-Wise Timeline" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
           
          </Container>
        </Navbar>
      </Container>

      <Container className="MainContainer">
          
        <Container>
          <Table striped bordered hover variant="light">

            <thead>
              <tr>
                <th>Phase</th>
                <th>Planned Start Date</th>
                <th>Planned End Date</th>
                <th>Revised End Date</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>

            <tbody>

                { projectList.map((x, index) =>{
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.project_name }</td>
                        <td>{x.start_date}</td>
                        <td>{x.end_date}</td>
                        <td>
                          {/* <Link to={`/manager/projectDetails/${x.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link>  */}
                        </td>
                      </tr>   
                    )
                }
          )}

            </tbody>
          </Table>
        </Container>
      </Container>
  

      </Col>
        
      </Row>

  {/* Project status table */}
      <Row style={{marginLeft:'3%'}}>
      <Col sm={8} >
      
      <Container className="Heading-OverallStatus">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Project Status" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
           
          </Container>
        </Navbar>
      </Container>

      <Container className="MainContainer">
          
        <Container>
          <Table striped bordered hover variant="light">

            <thead>
              <tr>
                <th>Overall last Week</th>
                <th>Overall This Week</th>
                <th>Scope</th>
                <th>schedule</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>

                { projectList.map((x, index) =>{
                    return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{x.project_name }</td>
                        <td>{x.start_date}</td>
                        <td>{x.end_date}</td>
                        <td>
                          {/* <Link to={`/manager/projectDetails/${x.id}`}><FaEye style={{ fontSize: "20px", color:'black' }} /></Link>  */}
                        </td>
                      </tr>   
                    )
                }
          )}

            </tbody>
          </Table>
        </Container>
      </Container>
    
      </Col>

        <Col sm={4} className='Project-phase'>

        <Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='p-2' style={{fontWeight:'bold'}}>Activities Planned for Next Week</Form.Label>
        <Form.Control as="textarea" rows={7} />
      </Form.Group>
    </Form>

        </Col>
      </Row>



      <Row style={{marginTop:'2%',marginLeft:'3%'}}>
        <Col sm={5} style={{marginLeft:'4%'}} className='Project-phase '>
        <Form>
      
      <Form.Group className="mb-3  big-inputfields" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='p-2' style={{fontWeight:'bold'}}>Key Accommplishments</Form.Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>
    </Form>
        </Col>

        
        <Col sm={5} className='Project-phase' style={{marginLeft:'4%'}}>
        <Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='p-2' style={{fontWeight:'bold'}}>Risks,Assumptions,Issues,Dependencies</Form.Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>
    </Form>
        </Col>
      </Row>


    </Container>
    </div>

  )
}

export default ProjectWeeklyReportOverview