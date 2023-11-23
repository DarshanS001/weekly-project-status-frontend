import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./AddWeekDataPage2.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Heading from "../../Heading";
import Table from "react-bootstrap/Table";

const AddWeekDataPage2 = () => {

   // To get the project report ID from Week Report Modal.js  
   console.log("Report ID From local storage:",localStorage.getItem("ReportID"));
   const ReportID = localStorage.getItem("ReportID");
   console.log("ReportID:=", ReportID);

   // To get the Phase wise timeline ID from AddWeekDataPage1.js  
   console.log("PhaseWiseTimeLineID From local storage:",localStorage.getItem("PhaseWiseTimeLineID"));
   const PhaseWiseTimeLineID = localStorage.getItem("PhaseWiseTimeLineID");
   console.log("PhaseWiseTimeLineID:=", PhaseWiseTimeLineID);

  const [prepare, setPrepare] = useState({
    TimeLinePrep: PhaseWiseTimeLineID,
    PhaseNamePrep: "prepare",
    PlannedStartDatePrep: "",
    PlannedEndDatePrep: "",
    RevisedEndDatePrep: "",
    StatusPrep: "R",
    RemarkPrep:""
  });

  const [explore, setExplore] = useState({
    TimeLineExpl: PhaseWiseTimeLineID,
    PhaseNameExpl: "explore",
    PlannedStartDateExpl: "",
    PlannedEndDateExpl: "",
    RevisedEndDateExpl: "",
    StatusExpl: "R",
    RemarkExpl:""
  });

  const [realize, setRealize] = useState({
    TimeLineReal: PhaseWiseTimeLineID,
    PhaseNameReal: "realize",
    PlannedStartDateReal: "",
    PlannedEndDateReal: "",
    RevisedEndDateReal: "",
    StatusReal: "R",
    RemarkReal:""
  });

  const [deploy, setDeploy] = useState({
    TimeLineDepl: PhaseWiseTimeLineID,
    PhaseNameDepl: "deploy",
    PlannedStartDateDepl: "",
    PlannedEndDateDepl: "",
    RevisedEndDateDepl: "",
    StatusDepl: "R",
    RemarkDepl:""
  });

  const [run, setRun] = useState({
    TimeLineRun: PhaseWiseTimeLineID,
    PhaseNameRun: "run",
    PlannedStartDateRun: "",
    PlannedEndDateRun: "",
    RevisedEndDateRun: "",
    StatusRun: "R",
    RemarkRun:""
  });

  // To destructure JSON object
  const {TimeLinePrep, PhaseNamePrep, PlannedStartDatePrep, PlannedEndDatePrep, RevisedEndDatePrep, StatusPrep, RemarkPrep} = prepare;
  const {TimeLineExpl, PhaseNameExpl, PlannedStartDateExpl, PlannedEndDateExpl, RevisedEndDateExpl, StatusExpl, RemarkExpl} = explore;
  const {TimeLineReal, PhaseNameReal, PlannedStartDateReal, PlannedEndDateReal, RevisedEndDateReal, StatusReal, RemarkReal} = realize;
  const {TimeLineDepl, PhaseNameDepl, PlannedStartDateDepl, PlannedEndDateDepl, RevisedEndDateDepl, StatusDepl, RemarkDepl} = deploy;
  const {TimeLineRun, PhaseNameRun, PlannedStartDateRun, PlannedEndDateRun, RevisedEndDateRun, StatusRun, RemarkRun} = run;

  const onInputChangePrepare = (e) => {
    setPrepare({ ...prepare, [e.target.name]: e.target.value});
  };

  const onInputChangeExplore = (e) => {
    setExplore({ ...explore, [e.target.name]: e.target.value});
  };

  const onInputChangeRealize = (e) => {
    setRealize({ ...realize, [e.target.name]: e.target.value});
  };

  const onInputChangeDeploy = (e) => {
    setDeploy({ ...deploy, [e.target.name]: e.target.value});
  };

  const onInputChangeRun = (e) => {
    setRun({ ...run, [e.target.name]: e.target.value});
  };

  console.log("prepare object", prepare);
  console.log("explore object", explore);
  console.log("realize object", realize);
  console.log("deploy object", deploy);
  console.log("run object", run);


  // ----------------Code for handle form submit--------------------------------
  const handleSubmit = (e) =>{
    e.preventDefault();

    axios({
        baseURL: 'http://127.0.0.1:8000/api/projectplan/phaseviewapi/',
        method: "POST",
        data: [
          {
            timeline:prepare.TimeLinePrep,
            phase_name:prepare.PhaseNamePrep,
            planned_start_date: prepare.PlannedStartDatePrep,
            planned_end_date:prepare.PlannedEndDatePrep,
            revised_end_date:prepare.RevisedEndDatePrep,
            status:prepare.StatusPrep,
            remark:prepare.RemarkPrep
          },

          {
            timeline:explore.TimeLineExpl,
            phase_name:explore.PhaseNameExpl,
            planned_start_date: explore.PlannedStartDateExpl,
            planned_end_date:explore.PlannedEndDateExpl,
            revised_end_date:explore.RevisedEndDateExpl,
            status:explore.StatusExpl,
            remark:explore.RemarkExpl
          },

          {
            timeline:realize.TimeLineReal,
            phase_name:realize.PhaseNameReal,
            planned_start_date: realize.PlannedStartDateReal,
            planned_end_date:realize.PlannedEndDateReal,
            revised_end_date:realize.RevisedEndDateReal,
            status:realize.StatusReal,
            remark:realize.RemarkReal
          },

          {
            timeline:deploy.TimeLineDepl,
            phase_name:deploy.PhaseNameDepl,
            planned_start_date: deploy.PlannedStartDateDepl,
            planned_end_date:deploy.PlannedEndDateDepl,
            revised_end_date:deploy.RevisedEndDateDepl,
            status:deploy.StatusDepl,
            remark:deploy.RemarkDepl
          },

          {
            timeline:run.TimeLineRun,
            phase_name:run.PhaseNameRun,
            planned_start_date: run.PlannedStartDateRun,
            planned_end_date:run.PlannedEndDateRun,
            revised_end_date:run.RevisedEndDateRun,
            status:run.StatusRun,
            remark:run.RemarkRun
          },
          
        ]
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in AddWeekDataPage2:",res.data);
            // window.location.href = "/manager/addWeekDataPage1";
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("Error!! Data is not submitted properly")
          // window.location.href = "/manager/addWeekDataPage1";
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
                  onClick={handleSubmit}
                >
                  <Link
                    to={"/manager/addWeekDataPage3"}
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
                <h5>Phase Wise Timeline</h5>
                <hr style={{ height: 5 }} />
                <p>1. Prepare</p>

                <Table>
                  <thead>
                    <tr>
                      <th>Planned Start Date</th>
                      <th>Planned End Date</th>
                      <th>Revised End Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody style={{ border: "None" }}>
                    <tr style={{ backgroundColor: "#E4F1FF" }}>
                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedStartDatePrep"
                          value={PlannedStartDatePrep}
                          onChange={(e)=>onInputChangePrepare(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedEndDatePrep"
                          value={PlannedEndDatePrep}
                          onChange={(e)=>onInputChangePrepare(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="RevisedEndDatePrep"
                          value={RevisedEndDatePrep}
                          onChange={(e)=>onInputChangePrepare(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Select 
                          name="StatusPrep" 
                          value={StatusPrep} 
                          onChange={(e)=>onInputChangePrepare(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:StatusPrep==="R" ? "#c21a08": StatusPrep==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Remark</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="RemarkPrep"
                  value={RemarkPrep}
                  onChange={(e)=>onInputChangePrepare(e)} 
                  />
                </Form.Group>

                <hr style={{ height: 2 }} />

                <p>2. Explore</p>
                
                <Table>
                  <thead>
                    <tr>
                      <th>Planned Start Date</th>
                      <th>Planned End Date</th>
                      <th>Revised End Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody style={{ border: "None" }}>
                    <tr style={{ backgroundColor: "#E4F1FF" }}>
                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedStartDateExpl"
                          value={PlannedStartDateExpl}
                          onChange={(e)=>onInputChangeExplore(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedEndDateExpl"
                          value={PlannedEndDateExpl}
                          onChange={(e)=>onInputChangeExplore(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="RevisedEndDateExpl"
                          value={RevisedEndDateExpl}
                          onChange={(e)=>onInputChangeExplore(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Select 
                          name="StatusExpl" 
                          value={StatusExpl} 
                          onChange={(e)=>onInputChangeExplore(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:StatusExpl==="R" ? "#c21a08": StatusExpl==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Remark</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="RemarkExpl"
                  value={RemarkExpl}
                  onChange={(e)=>onInputChangeExplore(e)} 
                  />
                </Form.Group>

                <hr style={{ height: 2 }} />

                <p>3. Realize</p>

                <Table>
                  <thead>
                    <tr>
                      <th>Planned Start Date</th>
                      <th>Planned End Date</th>
                      <th>Revised End Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody style={{ border: "None" }}>
                    <tr style={{ backgroundColor: "#E4F1FF" }}>
                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedStartDateReal"
                          value={PlannedStartDateReal}
                          onChange={(e)=>onInputChangeRealize(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedEndDateReal"
                          value={PlannedEndDateReal}
                          onChange={(e)=>onInputChangeRealize(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="RevisedEndDateReal"
                          value={RevisedEndDateReal}
                          onChange={(e)=>onInputChangeRealize(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Select 
                          name="StatusReal" 
                          value={StatusReal} 
                          onChange={(e)=>onInputChangeRealize(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:StatusReal==="R" ? "#c21a08": StatusReal==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                           <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Remark</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="RemarkReal"
                  value={RemarkReal}
                  onChange={(e)=>onInputChangeRealize(e)} 
                  />
                </Form.Group>

                <hr style={{ height: 2 }} />

                <p>4. Deploy</p>

                <Table>
                  <thead>
                    <tr>
                      <th>Planned Start Date</th>
                      <th>Planned End Date</th>
                      <th>Revised End Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody style={{ border: "None" }}>
                    <tr style={{ backgroundColor: "#E4F1FF" }}>
                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedStartDateDepl"
                          value={PlannedStartDateDepl}
                          onChange={(e)=>onInputChangeDeploy(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedEndDateDepl"
                          value={PlannedEndDateDepl}
                          onChange={(e)=>onInputChangeDeploy(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="RevisedEndDateDepl"
                          value={RevisedEndDateDepl}
                          onChange={(e)=>onInputChangeDeploy(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Select 
                          name="StatusDepl" 
                          value={StatusDepl} 
                          onChange={(e)=>onInputChangeDeploy(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:StatusDepl==="R" ? "#c21a08": StatusDepl==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Remark</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="RemarkDepl"
                  value={RemarkDepl}
                  onChange={(e)=>onInputChangeDeploy(e)} 
                  />
                </Form.Group>

                <hr style={{ height: 2 }} />

                <p>5. Run</p>

                <Table>
                  <thead>
                    <tr>
                      <th>Planned Start Date</th>
                      <th>Planned End Date</th>
                      <th>Revised End Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody style={{ border: "None" }}>
                    <tr style={{ backgroundColor: "#E4F1FF" }}>
                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedStartDateRun"
                          value={PlannedStartDateRun}
                          onChange={(e)=>onInputChangeRun(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="PlannedEndDateRun"
                          value={PlannedEndDateRun}
                          onChange={(e)=>onInputChangeRun(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Control 
                          type="date" 
                          name="RevisedEndDateRun"
                          value={RevisedEndDateRun}
                          onChange={(e)=>onInputChangeRun(e)}
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group size="lg" controlId="password">
                          <Form.Select 
                          name="StatusRun" 
                          value={StatusRun} 
                          onChange={(e)=>onInputChangeRun(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:StatusRun==="R" ? "#c21a08": StatusRun==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#c21a08", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Remark</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="RemarkRun"
                  value={RemarkRun}
                  onChange={(e)=>onInputChangeRun(e)} 
                  />
                </Form.Group>

              </Container>
            </Container>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default AddWeekDataPage2;
