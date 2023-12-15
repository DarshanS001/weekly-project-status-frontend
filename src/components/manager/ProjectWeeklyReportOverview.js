import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProjectWeeklyReportOverview.css";
import Table from "react-bootstrap/Table";

import { FaEye, FaSistrix } from "react-icons/fa";
import Heading from "../Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import { useRef } from "react";

const ProjectWeeklyReportOverview = () => {

  const conponentPDF= useRef();
  // To get Id from project weekly report list page....
  const { id } = useParams();
  console.log("id of project weekly report in overview:-", id);

  const [projectStatusDetails, setProjectStatusDetails] = useState([]);
  const [phaseView, setPhaseView] = useState([]);
  const [phaseWiseTime, setPhaseWiseTime] = useState([]);
  const [accomplishment, setAccomplishment] = useState([]);
  const [risk, setRisk] = useState([]);
  const [assumptions, setAssumptions] = useState([]);
  const [issues, setIssues] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [weeklyProjectReport, setWeeklyProjectReport] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [taskTodo, setTaskTodo] = useState([]);

  useEffect(() => {
    // ------------------------------ProjectStatusApi---------------------------------------------------
    async function getProjectStatusApi() {
      try {
        const projStatus = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/projectstatusapi/${id}/`
        );
        console.log("Get projStatus Data", projStatus.data);
        setProjectStatusDetails(projStatus.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Project Status API");
      }
    }

    getProjectStatusApi();

    // ------------------------------PhaseWiseTimelineApi---------------------------------------------------
    async function getPhaseWiseTimelineApi() {
      try {
        const phaseWise = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/phasewisetimelineapi/${id}/`
        );
        console.log("Get Phase Wise Time Line Data", phaseWise.data);
        setPhaseWiseTime(phaseWise.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Phase Wise Time Line API");
      }
    }

    getPhaseWiseTimelineApi();

    // -------------------------------AccompolishmentApi-------------------------------------------------
    async function getAccompolishmentApi() {
      try {
        const accomplish = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/accomplishmentsapi/${id}/`
        );
        console.log("Get Accomplishment Data", accomplish.data);
        setAccomplishment(accomplish.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Accomplishment API");
      }
    }

    getAccompolishmentApi();

    // ------------------------------RiskApi---------------------------------------------------
    async function getRiskApi() {
      try {
        const riskData = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/riskapi/${id}/`
        );
        console.log("Get Risk Data", riskData.data);
        setRisk(riskData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Risk API");
      }
    }

    getRiskApi();

    // -----------------------------IssueApi----------------------------------------------------
    async function getIssueApi() {
      try {
        const issueData = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/issueapi/${id}/`
        );
        console.log("Get Issue Data", issueData.data);
        setIssues(issueData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Issue API");
      }
    }

    getIssueApi();

    // ------------------------------AssumptionApi---------------------------------------------------
    async function getAssumptionApi() {
      try {
        const assumptionData = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/assumptionsapi/${id}/`
        );
        console.log("Get Assumption Data", assumptionData.data);
        setAssumptions(assumptionData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Assumption API");
      }
    }

    getAssumptionApi();

    // -----------------------------DependenciesApi----------------------------------------------------
    async function getDependenciesApi() {
      try {
        const dependenciesData = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/dependancyapi/${id}/`
        );
        console.log("Get Dependencies Data", dependenciesData.data);
        setDependencies(dependenciesData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Dependencies API");
      }
    }

    getDependenciesApi();

    // -----------------------------WeeklyProjectReportApi----------------------------------------------------
    async function getWeeklyProjectReportApi() {
      try {
        const weeklyReportData = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/weeklyreportapi/${id}/`
        );
        console.log("Get weeklyReportData Data", weeklyReportData.data);
        setWeeklyProjectReport(weeklyReportData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Weekly Project Report API");
      }
    }

    getWeeklyProjectReportApi();

    // -----------------------------TaskTodoApi----------------------------------------------------
    async function getTaskTodoApi() {
      try {
        const TaskTodoData = await axios.get(
          `http://127.0.0.1:8000/api/projectplan/tasktodoapi/${id}/`
        );
        console.log("Get TaskTodoData Data", TaskTodoData.data);
        setTaskTodo(TaskTodoData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Task Todo Data API");
      }
    }

    getTaskTodoApi();
  }, []);

  useEffect(() => {
    // -----------------------------PhaseViewApi----------------------------------------------------

    if (phaseWiseTime.id) {
      console.log("phase Wise Time Line Data ID", phaseWiseTime.id);
      async function getPhaseViewApi() {
        try {
          const phaseViewData = await axios.get(
            `http://127.0.0.1:8000/api/projectplan/phaseviewapi/${phaseWiseTime.id}/`
          );
          console.log("Get phase View Data", phaseViewData.data);
          setPhaseView(phaseViewData.data);
        } catch (error) {
          console.log("Data fetching Error Occured in Phase View API");
        }
      }
      getPhaseViewApi();
    }
  }, [phaseWiseTime.id]);

  useEffect(() => {
    // -----------------------------ProjectDetails----------------------------------------------------
    if (weeklyProjectReport.project) {
      async function getProjectDetails() {
        try {
          const projectDetailsData = await axios.get(
            `http://127.0.0.1:8000/api/projectplan/projectsapi/${weeklyProjectReport.project}/`
          );
          console.log("Get Dependencies Data", projectDetailsData.data);
          setProjectDetails(projectDetailsData.data);
        } catch (error) {
          console.log("Data fetching Error Occured in Project Details API");
        }
      }

      getProjectDetails();
    }
  }, [weeklyProjectReport.project]);

  console.log("projectStatusDetails", projectStatusDetails);
  console.log("phase Wise Time Line Data", phaseWiseTime);
  console.log("phase Wise Time Line Data ID", phaseWiseTime.id);
  console.log("phaseView Data", phaseView);
  console.log("Accomplishment Data", accomplishment);
  console.log("Assumptions Data", assumptions);
  console.log("Risk Data", risk);
  console.log("Issue Data", issues);
  console.log("Dependencies Data", dependencies);
  console.log("Weekly Project Report Data", weeklyProjectReport);
  console.log("Weekly Project Report ID", weeklyProjectReport.project);
  console.log("Project Details Data", projectDetails);
  console.log("Task Todo Data", taskTodo);

// -----------------------------Downloading pdf----------------------------------------------------
  const generatePDF= useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle:"Userdata",
    onAfterPrint:()=>alert("Data saved in PDF Format")
});

  return (
    <div className="ParentContainer" >
      
      <Container ref={conponentPDF}>
      <h1 className="pb-1">Project Report Overview</h1>
      <hr/>
      
      {/* Note  */}
      <div className="d-flex">

      <div className="NotesData">
      <h3 className="mt-1"><small>Notes</small></h3>
      <Container>
      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th><small>Colour Code</small></th>
          <th><small>Description</small></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <Form.Control
                type="text"
                id="exampleColorInput"
                disabled
                size="sm"
                style={{
                backgroundColor:"#ed5247",
                width: 100,
                }}/>
          </td>
            
          <td><small>Major problems may affect project success</small></td>
        </tr>

        <tr>
          <td>
          <Form.Control
                type="text"
                id="exampleColorInput"
                disabled
                size="sm"
                style={{
                backgroundColor:"#f7c95e",
                width: 100,
                }}/>
          </td>
            
          <td><small>Minor issues in the project that need attention</small></td>
        </tr>

        <tr>
          <td>
          <Form.Control
                type="text"
                id="exampleColorInput"
                disabled
                size="sm"
                style={{
                backgroundColor:"#53cf7a",
                width: 100,
                }}/>
          </td>
            
          <td><small>Everything is on track</small></td>
        </tr>
        
        
      </tbody>
    </Table>
      </Container>
        
      </div>

      <div className="pdf-button">
        <Button className="btn btn-success" onClick={generatePDF}>Download PDF</Button> 
        </div>
      </div>
      
      
        {/* Overall phases and status  */}
        <Row>
          <Col>
            <Container className="MainContainer3 mt-4">
              <Table responsive>
                <tbody>
                  <tr>
                    <td>
                      <b>Current Phase:</b>
                    </td>

                    <div className="phaseViewArray">
                      {phaseView &&
                        phaseView.map((x, index) => {
                          return (
                            <div key={index} className="me-2 mt-2 mb-2 ms-2">
                              <Form.Control
                                type="text"
                                id="exampleColorInput"
                                disabled
                                value={x.phase_name}
                                size="sm"
                                style={{
                                  backgroundColor:
                                    x.status === "R"
                                      ? "#ed5247"
                                      : x.status === "A"
                                      ? "#f7c95e"
                                      : "#53cf7a",
                                  width: 100,
                                }}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </tr>

                  <tr>
                    <td>
                      <b>Overall Health:</b>
                    </td>
                    {projectStatusDetails.overall_health ? (
                      <td>
                        <Form.Control
                          className="ms-2"
                          type="text"
                          id="exampleColorInput"
                          title="Choose your color"
                          disabled
                          size="sm"
                          style={{
                            backgroundColor:
                              projectStatusDetails.overall_health === "R"
                                ? "#ed5247"
                                : projectStatusDetails.overall_health === "A"
                                ? "#f7c95e"
                                : "#53cf7a",
                            width: 100,
                          }}
                        />
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>

                  <tr>
                    <td>
                      <b>Project Name:</b>
                    </td>
                    <td>
                      <Form.Control
                        type="text"
                        value={projectDetails.project_name}
                        id="exampleColorInput"
                        title="Choose your color"
                        disabled
                        size="sm"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Project Manager Name:</b>
                    </td>
                    <td>
                      <Form.Control
                        type="text"
                        value={projectDetails.manager_name}
                        id="exampleColorInput"
                        title="Choose your color"
                        disabled
                        size="sm"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>

        {/* phase wise timeline table */}
        <Row>
          <Col>
            <Container
              style={{ height: phaseView.length ? "15%" : "25%" }}
              className="Heading-PhaseWiseTimeline"
            >
              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand>
                    <Heading Heading="High Level Phase-Wise Timeline" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
              </Navbar>
            </Container>

            <Container
              // style={{ height: phaseView.length ? "70%" : "50%" }}
              className="MainContainer1"
            >
              <Container>
                <Table striped bordered hover variant="light" responsive>
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
                    {phaseView.length ? (
                      phaseView.map((x, index) => {
                        return (
                          <tr key={index}>
                            <td>{x.phase_name}</td>
                            <td>{x.planned_end_date}</td>
                            <td>{x.planned_start_date}</td>
                            <td>{x.revised_end_date}</td>
                            <td>
                              <Form.Control
                                className="ms-3"
                                type="text"
                                id="exampleColorInput"
                                title="Choose your color"
                                disabled
                                size="sm"
                                style={{
                                  backgroundColor:
                                    x.status === "R"
                                      ? "#ed5247"
                                      : x.status === "A"
                                      ? "#f7c95e"
                                      : "#53cf7a",
                                  width: 80,
                                }}
                              />
                            </td>
                            <td>{x.remark}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td></td>
                        <td></td>
                        <td>No Data Yet</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Container>
            </Container>
          </Col>
        </Row>

        {/* Project status table */}
        <Row>
          <Col>
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

            <Container className="MainContainer2">
              <Container>
                <Table striped bordered hover variant="light" responsive>
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
                    <tr>
                      <td>
                        {projectStatusDetails.overall_last_week ? (
                          <Form.Control
                            className="ms-5"
                            type="text"
                            id="exampleColorInput"
                            title="Choose your color"
                            disabled
                            size="sm"
                            style={{
                              backgroundColor:
                                projectStatusDetails.overall_last_week === "R"
                                  ? "#ed5247"
                                  : projectStatusDetails.overall_last_week ===
                                    "A"
                                  ? "#f7c95e"
                                  : "#53cf7a",
                              width: 80,
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </td>

                      <td>
                        {projectStatusDetails.overall_this_week ? (
                          <Form.Control
                            className="ms-5"
                            type="text"
                            id="exampleColorInput"
                            title="Choose your color"
                            disabled
                            size="sm"
                            style={{
                              backgroundColor:
                                projectStatusDetails.overall_this_week === "R"
                                  ? "#ed5247"
                                  : projectStatusDetails.overall_this_week ===
                                    "A"
                                  ? "#f7c95e"
                                  : "#53cf7a",
                              width: 80,
                            }}
                          />
                        ) : (
                          "No Data Yet"
                        )}
                      </td>

                      <td>
                        {projectStatusDetails.scope ? (
                          <Form.Control
                            className="ms-3"
                            type="text"
                            id="exampleColorInput"
                            title="Choose your color"
                            disabled
                            size="sm"
                            style={{
                              backgroundColor:
                                projectStatusDetails.scope === "R"
                                  ? "#ed5247"
                                  : projectStatusDetails.scope === "A"
                                  ? "#f7c95e"
                                  : "#53cf7a",
                              width: 80,
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </td>

                      <td>
                        {projectStatusDetails.schedule ? (
                          <Form.Control
                            className="ms-3"
                            type="text"
                            id="exampleColorInput"
                            title="Choose your color"
                            disabled
                            size="sm"
                            style={{
                              backgroundColor:
                                projectStatusDetails.schedule === "R"
                                  ? "#ed5247"
                                  : projectStatusDetails.schedule === "A"
                                  ? "#f7c95e"
                                  : "#53cf7a",
                              width: 80,
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </td>

                      <td>
                        {projectStatusDetails.cost ? (
                          <Form.Control
                            className="ms-3"
                            type="text"
                            id="exampleColorInput"
                            title="Choose your color"
                            disabled
                            size="sm"
                            style={{
                              backgroundColor:
                                projectStatusDetails.cost === "R"
                                  ? "#ed5247"
                                  : projectStatusDetails.cost === "A"
                                  ? "#f7c95e"
                                  : "#53cf7a",
                              width: 80,
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Container>
          </Col>
        </Row>

        <Container className="Row1 mt-5">
          <Table responsive>
            <tbody>
              <tr style={{ backgroundColor: "rgb(159, 156, 156)" }}>

              <td>
                  <Container className="Project-phase2">
                  <Form.Label className="p-2" style={{ fontWeight: "bold", fontSize: 20 }}>
                      Activities Planned for Next Week
                    </Form.Label>

                    <Table striped bordered hover responsive>
                      {
                        taskTodo.length ? 
                        <thead>
                        <tr>
                          <th>Description</th>
                        </tr>
                      </thead>
                      : ""
                      }
                      
                        {taskTodo.length ? (
                          taskTodo.map((x, index) => {
                            return (
                              <tbody>
                              <tr key={index}>
                                <td>
                                  <Form.Control
                                    as="textarea"
                                    rows={1}
                                    value={x.description}
                                    className="mt-2"
                                  />
                                </td>
                              </tr>
                              </tbody>
                            );
                          })
                        ) : (
                          <Form.Control
                            as="textarea"
                            placeholder="No Data Yet"
                            rows={7}
                          />
                        )}
                      
                    </Table>
                  </Container>
                </td>

                <td>
                  <Container className="Project-phase2">
                  <Form.Label className="p-2" style={{ fontWeight: "bold", fontSize: 20 }}>
                      Key Accomplishment
                    </Form.Label>

                    <Table striped bordered hover responsive>
                      {
                        accomplishment.length ? 
                        <thead>
                        <tr>
                          <th>Description</th>
                        </tr>
                      </thead>
                      : ""
                      }
                      
                        {accomplishment.length ? (
                          accomplishment.map((x, index) => {
                            return (
                              <tbody>
                              <tr key={index}>
                                <td>
                                  <Form.Control
                                    as="textarea"
                                    rows={1}
                                    value={x.Description}
                                    className="mt-2"
                                  />
                                </td>
                              </tr>
                              </tbody>
                            );
                          })
                        ) : (
                          <Form.Control
                            as="textarea"
                            placeholder="No Data Yet"
                            rows={7}
                          />
                        )}
                      
                    </Table>
                  </Container>
                </td>

                <td>
                  <Container className="Project-phase1">
                    <Form.Label className="p-2" style={{ fontWeight: "bold", fontSize: 20 }}>
                      Risk
                    </Form.Label>

                    <Table striped bordered hover responsive>
                      {
                        risk.length ? 
                        <thead>
                        <tr>
                          <th>Description</th>
                          <th>RAG Status</th>
                        </tr>
                      </thead>
                      : ""
                      }
                      
                      
                        {risk.length ? (
                          risk.map((x, index) => {
                            return (
                              <tbody>
                              <tr key={index}>
                                <td>
                                  <Form.Control
                                    as="textarea"
                                    rows={1}
                                    value={x.risk_description}
                                    className="mt-2"
                                  />
                                </td>
                                <td>
                                  <Form.Control
                                    className="ms-3"
                                    type="text"
                                    id="exampleColorInput"
                                    title="Choose your color"
                                    disabled
                                    size="sm"
                                    style={{
                                      backgroundColor:
                                        x.RAGStatus === "R"
                                          ? "#ed5247"
                                          : x.RAGStatus === "A"
                                          ? "#f7c95e"
                                          : "#53cf7a",
                                      width: 80,
                                    }}
                                  />
                                </td>
                              </tr>
                              </tbody>
                            );
                          })
                        ) : (
                          <Form.Control
                            as="textarea"
                            placeholder="No Data Yet"
                            rows={7}
                          />
                        )}
                      
                    </Table>
                  </Container>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Container className="Row2">
          <Table responsive>
            <tbody>
              <tr style={{ backgroundColor: "rgb(159, 156, 156)" }}>

                <td>
                  <Container className="Project-phase2">
                  <Form.Label className="p-2" style={{ fontWeight: "bold", fontSize: 20 }}>
                      Assumptions
                    </Form.Label>

                    <Table striped bordered hover responsive>
                      {
                        assumptions.length ? 
                        <thead>
                        <tr>
                          <th>Description</th>
                        </tr>
                      </thead>
                      : ""
                      }
                      
                        {assumptions.length ? (
                          assumptions.map((x, index) => {
                            return (
                              <tbody>
                              <tr key={index}>
                                <td>
                                  <Form.Control
                                    as="textarea"
                                    rows={1}
                                    value={x.assumption}
                                    className="mt-2"
                                  />
                                </td>
                              </tr>
                              </tbody>
                            );
                          })
                        ) : (
                          <Form.Control
                            as="textarea"
                            placeholder="No Data Yet"
                            rows={7}
                          />
                        )}
                      
                    </Table>
                  </Container>
                </td>

                <td>
                  <Container className="Project-phase2">
                  <Form.Label className="p-2" style={{ fontWeight: "bold", fontSize: 20 }}>
                      Issues
                    </Form.Label>

                    <Table striped bordered hover responsive>
                      {
                        issues.length ? 
                        <thead>
                        <tr>
                          <th>Description</th>
                          <th>RAG Status</th>
                        </tr>
                      </thead>
                      : ""
                      }
                      
                      
                        {issues.length ? (
                          issues.map((x, index) => {
                            return (
                              <tbody>
                              <tr key={index}>
                                <td>
                                  <Form.Control
                                    as="textarea"
                                    rows={1}
                                    value={x.issue_description}
                                    className="mt-2"
                                  />
                                </td>
                                <td>
                                  <Form.Control
                                    className="ms-3"
                                    type="text"
                                    id="exampleColorInput"
                                    title="Choose your color"
                                    disabled
                                    size="sm"
                                    style={{
                                      backgroundColor:
                                        x.RAGStatus === "R"
                                          ? "#ed5247"
                                          : x.RAGStatus === "A"
                                          ? "#f7c95e"
                                          : "#53cf7a",
                                      width: 80,
                                    }}
                                  />
                                </td>
                              </tr>
                              </tbody>
                            );
                          })
                        ) : (
                          <Form.Control
                            as="textarea"
                            placeholder="No Data Yet"
                            rows={7}
                          />
                        )}
                      
                    </Table>
                  </Container>
                </td>

                <td>
                  <Container className="Project-phase2">
                  <Form.Label className="p-2" style={{ fontWeight: "bold", fontSize: 20 }}>
                      Dependencies
                    </Form.Label>

                    <Table striped bordered hover responsive>
                      {
                        dependencies.length ? 
                        <thead>
                        <tr>
                          <th>Description</th>
                          <th>RAG Status</th>
                        </tr>
                      </thead>
                      : ""
                      }
                      
                      
                        {dependencies.length ? (
                          dependencies.map((x, index) => {
                            return (
                              <tbody>
                              <tr key={index}>
                                <td>
                                  <Form.Control
                                    as="textarea"
                                    rows={1}
                                    value={x.dependency_description}
                                    className="mt-2"
                                  />
                                </td>
                                <td>
                                  <Form.Control
                                    className="ms-3"
                                    type="text"
                                    id="exampleColorInput"
                                    title="Choose your color"
                                    disabled
                                    size="sm"
                                    style={{
                                      backgroundColor:
                                        x.RAGStatus === "R"
                                          ? "#ed5247"
                                          : x.RAGStatus === "A"
                                          ? "#f7c95e"
                                          : "#53cf7a",
                                      width: 80,
                                    }}
                                  />
                                </td>
                              </tr>
                              </tbody>
                            );
                          })
                        ) : (
                          <Form.Control
                            as="textarea"
                            placeholder="No Data Yet"
                            rows={7}
                          />
                        )}
                      
                    </Table>
                  </Container>
                </td>
              </tr>
            </tbody>
          </Table>
          
        </Container>
      </Container>
      
    </div>
  );
};

export default ProjectWeeklyReportOverview;
