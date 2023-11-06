import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./AddWeekDataPage1.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Heading from "../../Heading";

const AddWeekDataPage1 = () => {
  
  const [endWeekDate, setEndWeekDate] = useState("");

  const [weekendDate, setWeekendDate] = useState({
    WeekendDate: ""
  });

  const [currentPhase, setCurrentPhase] = useState({
    Prepare: "",
    Explore: "",
    Realize: "",
    Deploy: "",
    Run: "",
  });

  const [overAllHealth, setOverAllHealth] = useState();

  const [ProjectDetails, setProjectDetails] = useState({
    ProjectName: "",
    ProjectManagerName: ""
  });

  const [projectStatus, setProjectStatus] = useState({
    OverallLastWeek: "",
    OverallThisWeek: "",
    Scope: "",
    Schedule: "",
    Cost: ""
  });


  // ---------------------------Code For Last Week Date---------------------------
  let date_today = new Date();
  console.log(`The current day index of the week is: ${date_today.getDay()}`);
  console.log(`The current date of the week is: ${date_today.getDate()}`);

  let last_day_of_the_week = new Date(date_today.setDate(date_today.getDate() 
                                - date_today.getDay() + 5));

  let Week_End_Date;
    console.log(`The last day of the week is: ${last_day_of_the_week}`);
    console.log(`End Date Lenght: ${last_day_of_the_week.getDate().toString().length}`);
    if(last_day_of_the_week.getDate().toString().length === 1){
        Week_End_Date = `${last_day_of_the_week.getFullYear()}-${last_day_of_the_week.getMonth()+1}-${0}${last_day_of_the_week.getDate()}`;
    }else{
        Week_End_Date = `${last_day_of_the_week.getFullYear()}-${last_day_of_the_week.getMonth()+1}-${last_day_of_the_week.getDate()}`;
    }
    console.log('Week_End_Date:', Week_End_Date);
    

    useEffect(()=>{
      setEndWeekDate(Week_End_Date);
  }, []);

  

  return (
    <>
    
      <Container className="Heading">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Heading Heading="Add Week Data" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse
              id="naFaSistrixvbarScroll"
              className="justify-content-end"
            >
              <Navbar.Brand className="text-light">

                <Button
                  style={{ backgroundColor: "#AE445A", marginBottom: "3px" }}
                  size="lg"
                  className="ms-2"
                >
                  <Link
                    to={"/manager/addWeekDataPage2"}
                    style={{ textDecoration: "None", color: "white" }}
                  >
                    Next
                  </Link>
                </Button>
              </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      <Container className="MainContainer">
        <Container className="AddWeekForm1">
          <Form>
            <Container className="formMainData">
              <Container className="formPart1">
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Week End Date</Form.Label>
              <Form.Control 
                type="date"
                value={endWeekDate}
                onChange={(e)=> setEndWeekDate(e.target.value)}
              />
              </Form.Group>
                <hr />
                <h6>Current Phase</h6>
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Prepare</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Explore</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Realize</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Deploy</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Run</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <hr />
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Overall Health</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>
              </Container>


              <div class="d-flex" style={{height: 700, marginLeft:20, marginRight:20}}>
                <div class="vr"></div>
              </div>

              <Container className="formPart2">
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group size="lg" controlId="email" className="mt-3">
                  <Form.Label>Project Manager Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <hr />
                <br />
                <h6>Project Status</h6>
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Overall Last Week</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Overall This Week</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Scope</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Schedule</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Cost</Form.Label>

                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>
              </Container>
            </Container>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default AddWeekDataPage1;
