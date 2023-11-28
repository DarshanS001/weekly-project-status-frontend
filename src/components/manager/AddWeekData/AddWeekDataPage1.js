import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./AddWeekDataPage1.css";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Heading from "../../Heading";

const AddWeekDataPage1 = () => {
  // To get the project report ID from Week Report Modal.js  
  console.log("Report ID From local storage:",localStorage.getItem("ReportID"));
  const ReportID = localStorage.getItem("ReportID");
  console.log("ReportID:=", ReportID);

  const navigate = useNavigate();
  const [endWeekDate, setEndWeekDate] = useState("");
  const [projectStatusData, setProjectStatusData] = useState({
    Report: ReportID,
    Overall_Last_Week: "R",
    Overall_This_Week: "R",
    Scope: "R",
    Schedule:"R",
    Cost:"R",
    OverAllHealth:"R",
    Prepare:"R",
    Explore:"R",
    Realize:"R",
    Deploy:"R",
    Run:"R"
  });

  // To Destructure JSON Object
  const {Report, Overall_Last_Week, Overall_This_Week, Scope, 
    Schedule, Cost, OverAllHealth, Prepare, Explore, Realize, Deploy, Run} = projectStatusData;
  
  const onInputChange = (e) =>{
    setProjectStatusData({...projectStatusData, [e.target.name]: e.target.value})
  }

  console.log("Project Status Object", projectStatusData);
  
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


  const HandleSubmit = (e) =>{
    e.preventDefault();

        axios({
            baseURL: 'http://127.0.0.1:8000/api/projectplan/phasewisetimelineapi/',
            method: "POST",
            data: {
              report:ReportID
            },
          })
            .then((res) => {
              if (res.status === 201) {
                console.log("result.data:",res.data);
                console.log("result.data[1]:",res.data["Data"].id);
                localStorage.setItem("PhaseWiseTimeLineID", res.data["Data"].id);
                console.log("PhaseWiseTimeLineID From local storage:",localStorage.getItem("PhaseWiseTimeLineID"));
                // navigate("/manager/addWeekDataPage2");
              }
            })
            .catch((error) => {
              console.log("ERROR", error);
              alert("There is some error in Phasewise Timeline API");
            });

  // =============================================================================
  axios({
    baseURL: 'http://127.0.0.1:8000/api/projectplan/projectstatusapi/',
    method: "POST",
    data: {
      report:Report,
      overall_last_week: Overall_Last_Week,
      overall_this_week: Overall_This_Week,
      scope: Scope,
      schedule: Schedule,
      cost: Cost,
      overall_health: OverAllHealth,
      prepare: Prepare,
      explore: Explore,
      realize: Realize,
      deploy: Deploy,
      run: Run
    },
  })
    .then((res) => {
      if (res.status === 201) {
        console.log("result.data:",res.data);
        navigate("/manager/addWeekDataPage2");
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
      alert("There is some error in Project Status API");
    });

  }

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
                  onClick={HandleSubmit}
                >
                    Next
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
              <Form.Label><h6>Week End Date</h6></Form.Label>
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

                  <Form.Select aria-label="Default select example"
                  name="Prepare"
                  value={Prepare}
                  onChange={(e)=>onInputChange(e)}

                  style={{backgroundColor:Prepare==="R" ? "#c21a08": Prepare==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Explore</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Explore"
                  value={Explore}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Explore==="R" ? "#c21a08": Explore==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Realize</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Realize"
                  value={Realize}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Realize==="R" ? "#c21a08": Realize==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Deploy</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Deploy"
                  value={Deploy}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Deploy==="R" ? "#c21a08": Deploy==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Run</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Run"
                  value={Run}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Run==="R" ? "#c21a08": Run==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <hr />
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3"><h6>Overall Health</h6></Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="OverAllHealth"
                  value={OverAllHealth}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:OverAllHealth==="R" ? "#c21a08": OverAllHealth==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>
              </Container>


              <div class="d-flex" style={{height: 700, marginLeft:20, marginRight:20}}>
                <div class="vr"></div>
              </div>

              <Container className="formPart2">

                {/* <Form.Group size="lg" controlId="email">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group size="lg" controlId="email" className="mt-3">
                  <Form.Label>Project Manager Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <hr />
                <br /> */}

                <h6>Project Status</h6>
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Overall Last Week</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Overall_Last_Week"
                  value={Overall_Last_Week}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Overall_Last_Week==="R" ? "#c21a08": Overall_Last_Week==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Overall This Week</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Overall_This_Week"
                  value={Overall_This_Week}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Overall_This_Week==="R" ? "#c21a08": Overall_This_Week==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Scope</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Scope"
                  value={Scope}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Scope==="R" ? "#c21a08": Scope==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Schedule</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Schedule"
                  value={Schedule}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Schedule==="R" ? "#c21a08": Schedule==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Cost</Form.Label>

                  <Form.Select aria-label="Default select example"
                  name="Cost"
                  value={Cost}
                  onChange={(e)=>onInputChange(e)}
                  style={{backgroundColor:Cost==="R" ? "#c21a08": Cost==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                    <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                    <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
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
