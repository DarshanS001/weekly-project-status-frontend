import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./AddWeekDataPage3.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Heading from "../../Heading";
import { FaPlus } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal';
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";

const AddWeekDataPage3 = () => {

  // -------------------Assumption Modal---------------------------------------
  const [showAssumption, setShowAssumption] = useState(false);

  const handleCloseAssumption = () => setShowAssumption(false);
  const handleShowAssumption = () => setShowAssumption(true);

  // -------------------Risk Modal---------------------------------------
  const [showRisk, setShowRisk] = useState(false);

  const handleCloseRisk = () => setShowRisk(false);
  const handleShowRisk = () => setShowRisk(true);

  // -------------------Issue Modal---------------------------------------
  const [showIssue, setShowIssue] = useState(false);

  const handleCloseIssue = () => setShowIssue(false);
  const handleShowIssue = () => setShowIssue(true);

  // -------------------Dependency Modal---------------------------------------
  const [showDependency, setShowDependency] = useState(false);

  const handleCloseDependency = () => setShowDependency(false);
  const handleShowDependency = () => setShowDependency(true);

  // To get the project report ID from Week Report Modal.js
  console.log(
    "Report ID From local storage:",
    localStorage.getItem("ReportID")
  );
  const ReportID = localStorage.getItem("ReportID");
  console.log("ReportID:=", ReportID);

// --------------------All JSON's To store data from form--------------------------------
  const [assumptions, setAssumptions] = useState({
    AssumptionReportId: ReportID,
    Assumption: "",
  });

  const [risk, setRisk] = useState({
    RiskReportId: ReportID,
    RiskDescription: "",
    RiskSeverity: "",
    RiskComplexity: "",
    RiskImpact: "",
    MitigationPlan: "",
    RiskStatus: "R",
  });

  const [issue, setIssue] = useState({
    IssueReportId: ReportID,
    IssueDescription: "",
    IssueSeverity: "",
    IssueComplexity: "",
    IssueImpact: "",
    IssueResponsibleParty: "",
    IssueStatus: "R",
  });

  const [dependencies, setDependencies] = useState({
    DependencyReportId: ReportID,
    DependencyDescription: "",
    TargetCompletionDate: "",
    DependencyResponsibleParty: "",
    DependencyStatus: "R",
  });

  const { AssumptionReportId, Assumption } = assumptions;
  const {
    RiskReportId,
    RiskDescription,
    RiskSeverity,
    RiskComplexity,
    RiskImpact,
    MitigationPlan,
    RiskStatus,
  } = risk;

  const {
    IssueReportId,
    IssueDescription,
    IssueSeverity,
    IssueComplexity,
    IssueImpact,
    IssueResponsibleParty,
    IssueStatus,
  } = issue;

  const {
    DependencyReportId,
    DependencyDescription,
    TargetCompletionDate,
    DependencyResponsibleParty,
    DependencyStatus,
  } = dependencies;

  // -----------------------All JSON data array to display tables in each section locally--------------
  const [assumptionsArray, setAssumptionsArray] = useState([]);
  const [riskArray, setRiskArray] = useState([]);
  const [issueArray, setIssueArray] = useState([]);
  const [dependencyArray, setDependencyArray] = useState([]);
  

  // ----------------------------All Inputs OnChange Functions--------------------------------

  const onAssupmtionChange = (e) => {
    setAssumptions({ ...assumptions, [e.target.name]: e.target.value });
  };

  const onRiskChange = (e) => {
    setRisk({ ...risk, [e.target.name]: e.target.value });
  };

  const onIssueChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const onDependencyChange = (e) => {
    setDependencies({ ...dependencies, [e.target.name]: e.target.value });
  };

  console.log("Assumption:", assumptions);
  console.log("Risk:", risk);
  console.log("Issue:", issue);
  console.log("Dependencies:", dependencies);
  
  // -------------Handle Submit for All modal Form-----------------------------------

  const HandleSubmitAssumptionsArray = (e) =>{
    e.preventDefault();
    setAssumptionsArray(AssumptionArray => [...AssumptionArray, assumptions]);
    setShowAssumption(false);
  }

  const HandleSubmitRiskArray = (e) =>{
    e.preventDefault();
    setRiskArray(RiskArray => [...RiskArray, risk]);
    setShowRisk(false);
  }

  const HandleSubmitIssueArray = (e) =>{
    e.preventDefault();
    setIssueArray(IssueArray => [...IssueArray, issue]);
    setShowIssue(false);
  }

  const HandleSubmitDependencyArray = (e) =>{
    e.preventDefault();
    setDependencyArray(DependencyArray => [...DependencyArray, dependencies]);
    setShowDependency(false);
  }

  console.log("Assumption Array:", assumptionsArray);
  console.log("Risk Array:", riskArray);
  console.log("Issue Array:", issueArray);
  console.log("Dependencies Array:", dependencyArray);

  // ----------------------Making Data Ready to Post------------------------------

  // ----------------------Assumption for loop-----------------------------------
  let assumptionPostData = []

  if(assumptionsArray.length){
    for(let i=0; i<assumptionsArray.length; i++){
      let report = assumptionsArray[i].AssumptionReportId;
      let assumption = assumptionsArray[i].Assumption;
      assumptionPostData.push({report, assumption});
  } 
  }
  
  console.log("assumptionPostData after:", assumptionPostData);
  // ----------------------Risk for loop-----------------------------------------
  let riskPostData = []

  if(riskArray.length){
    for(let i=0; i<riskArray.length; i++){
      let report = riskArray[i].RiskReportId;
      let risk_description = riskArray[i].RiskDescription;
      let severity = riskArray[i].RiskSeverity;
      let complexity = riskArray[i].RiskComplexity;
      let impact = riskArray[i].RiskImpact;
      let mitigation_plan = riskArray[i].MitigationPlan;
      let RAGStatus = riskArray[i].RiskStatus;
      riskPostData.push({report, risk_description, severity, complexity, impact, mitigation_plan, RAGStatus});
  } 
  }
  
  console.log("riskPostData after:", riskPostData);
  // ----------------------Issue for loop----------------------------------------
  let issuePostData = []

  if(issueArray.length){
    for(let i=0; i<issueArray.length; i++){
      let report = issueArray[i].IssueReportId;
      let issue_description = issueArray[i].IssueDescription;
      let severity = issueArray[i].IssueSeverity;
      let complexity = issueArray[i].IssueComplexity;
      let impact = issueArray[i].IssueImpact;
      let responsible_party = issueArray[i].IssueResponsibleParty;
      let RAGStatus = issueArray[i].IssueStatus;
      issuePostData.push({report, issue_description, severity, complexity, impact, responsible_party, RAGStatus});
  } 
  }
  
  console.log("issuePostData after:", issuePostData);
  // ----------------------Dependency for loop-----------------------------------
  let dependencyPostData = []

  if(dependencyArray.length){
    for(let i=0; i<dependencyArray.length; i++){
      let report = dependencyArray[i].DependencyReportId;
      let dependency_description = dependencyArray[i].DependencyDescription;
      let target_completion_date = dependencyArray[i].TargetCompletionDate;
      let responsible_party = dependencyArray[i].DependencyResponsibleParty;
      let RAGStatus = dependencyArray[i].DependencyStatus;
     
      dependencyPostData.push({report, dependency_description, target_completion_date, responsible_party, RAGStatus});
  } 
  }
  
  console.log("dependencyPostData after:", dependencyPostData);

  // --------------------------------------------------------------------------------------
  // -------------Handle Delete for All Table Array-----------------------------------

  const AssumptionsDelete=(AssumpDescription)=>{
    console.log("DelID", AssumpDescription);
    const newAssumptions = assumptionsArray.filter((obj)=>obj.Assumption !== AssumpDescription)
    console.log("In Assump Delete", newAssumptions);
    setAssumptionsArray(newAssumptions);
  }

  const RiskDelete=(RiskDescription)=>{
    console.log("DelID", RiskDescription);
    const newRisk = riskArray.filter((obj)=>obj.RiskDescription !== RiskDescription)
    console.log("In Risk Delete", newRisk);
    setRiskArray(newRisk);
    
  }

  const IssueDelete=(IssueDescription)=>{
    console.log("DelID", IssueDescription);
    const newIssue = issueArray.filter((obj)=>obj.IssueDescription !== IssueDescription)
    console.log("In Issue Delete", newIssue);
    setIssueArray(newIssue);
    
  }

  const DependencyDelete=(DependDescription)=>{
    console.log("DelID", DependDescription);
    const newDepend = issueArray.filter((obj)=>obj.DependencyDescription !== DependDescription)
    console.log("In Depend Delete", newDepend);
    setDependencyArray(newDepend);
  }


  // -------------------------------API Submit----------------------------------------
  const HandleSubmit = (e) => {
    e.preventDefault();

    // =====================API For Assumptions==============================================
      axios({
        baseURL: "http://127.0.0.1:8000/api/projectplan/assumptionsapi/",
        method: "POST",
        // data: {
        //   report: AssumptionReportId,
        //   assumption: Assumption,
        // },
        data: assumptionPostData,
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in Assuption API:", res.data);
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("There is some error in Assumption API");
        });

    

    // =====================API For Risk==============================================

      axios({
        baseURL: "http://127.0.0.1:8000/api/projectplan/riskapi/",
        method: "POST",
        // data: {
        //   report: RiskReportId,
        //   risk_description: RiskDescription,
        //   severity: RiskSeverity,
        //   complexity: RiskComplexity,
        //   impact: RiskImpact,
        //   mitigation_plan: MitigationPlan,
        //   RAGStatus: RiskStatus,
        // },

        data: riskPostData,
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in Risk API:", res.data);
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("There is some error in Risk API");
        });
    

    // =====================API For Issue==============================================

      axios({
        baseURL: "http://127.0.0.1:8000/api/projectplan/issueapi/",
        method: "POST",
        // data: {
        //   report: IssueReportId,
        //   issue_description: IssueDescription,
        //   severity: IssueSeverity,
        //   complexity: IssueComplexity,
        //   impact: IssueImpact,
        //   responsible_party: IssueResponsibleParty,
        //   RAGStatus: IssueStatus,
        // },
        data: issuePostData,
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in Issue API:", res.data);
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("There is some error in Issue API");
        });

    // =====================API For Dependencies==============================================
      axios({
        baseURL: "http://127.0.0.1:8000/api/projectplan/dependancyapi/",
        method: "POST",
        // data: {
        //   report: DependencyReportId,
        //   dependency_description: DependencyDescription,
        //   target_completion_date: TargetCompletionDate,
        //   responsible_party: DependencyResponsibleParty,
        //   RAGStatus: DependencyStatus,
        // },

        data: dependencyPostData,
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in Dependency API:", res.data);
            alert("Form Data Added Successfully");
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("There is some error in Dependency API");
        });

  };

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
                   <Link
                    to={"/manager/addWeekDataPage4"}
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

        {/*-----------------------------------Assumptions Section--------------------*/}
        <Container>
          <Row>
            <Col xs={10}>
              <div className="justify-content-start">
                <Form.Label>
                  <h5>Assumptions</h5>
                </Form.Label>
              </div>
            </Col>

            <Col>
              <div className="justify-content-end">
              <Button 
              style={{backgroundColor:"rgb(245, 232, 216)", color:"black", border: "None"}}
              onClick={handleShowAssumption}
              ><FaPlus style={{ fontSize: "25px"}} /></Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Row className="mt-4">
          <Col>
          <Table bordered hover variant="light" responsive>
                <thead>
                  {assumptionsArray.length > 0 &&
                      <tr>
                      <th>Sr. No.</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  }
                </thead>

                <tbody>

                    { assumptionsArray.length > 0 && assumptionsArray.map((x, index)=>{
                          return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{x.Assumption }</td>
                                
                                <td>
                                <Button variant="light" 
                                style={{color:"black", border: "None"}}
                                onClick={() => AssumptionsDelete(x.Assumption)}
                                >
                                    <MdDelete style={{ fontSize: "20px", color:'black' }} />
                                  </Button> 
                                </td>
                              </tr>   
                          )
                        })
                      }
                  
                </tbody>
          </Table>
          </Col>
        </Row>

        <hr />

        
        {/*-----------------------------------Risk Section--------------------*/}
        <Container>
          <Row>
            <Col xs={10}>
              <div className="justify-content-start">
                <Form.Label>
                  <h5>Risk</h5>
                </Form.Label>
              </div>
            </Col>

            <Col>
              <div className="justify-content-end">
              <Button 
              style={{backgroundColor:"rgb(245, 232, 216)", color:"black", border: "None"}}
              onClick={handleShowRisk}
              ><FaPlus style={{ fontSize: "25px"}} /></Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
            <Table bordered hover variant="light" responsive>
                <thead>
                  {riskArray.length > 0 &&
                      <tr>
                      <th>Sr. No.</th>
                      <th>Description</th>
                      <th>Severity</th>
                      <th>Complexity</th>
                      <th>Impact</th>
                      <th>Mitigation Plan</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  }
                </thead>

                <tbody>

                    { riskArray.length > 0 && riskArray.map((x, index)=>{
                          return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{x.RiskDescription }</td>
                                <td>{x.RiskSeverity }</td>
                                <td>{x.RiskComplexity}</td>
                                <td>{x.RiskImpact}</td>
                                <td>{x.MitigationPlan}</td>
                                <td><Form.Control
                        className="ms-3"
                        type="text"
                        id="exampleColorInput"
                        title="Choose your color"
                        disabled
                        size="sm"
                        style={{backgroundColor:x.RiskStatus==="R" ? "#c21a08": 
                        x.RiskStatus==="A" ? "#FF5733": "#2dad42", width:80}}/></td>

                                <td>
                                <Button variant="light" 
                                style={{color:"black", border: "None"}}
                                onClick={() => RiskDelete(x.RiskDescription)}
                                >
                                    <MdDelete style={{ fontSize: "20px", color:'black' }} />
                                  </Button> 
                                </td>
                              </tr>   
                          )
                        })
                      }
                  
                </tbody>
          </Table>
            </Col>
          </Row>
        </Container>

        <hr />

        {/*-----------------------------------Issue Section--------------------*/}
        <Container>
          <Row>
            <Col xs={10}>
              <div className="justify-content-start">
                <Form.Label>
                  <h5>Issue</h5>
                </Form.Label>
              </div>
            </Col>

            <Col>
              <div className="justify-content-end">
              <Button 
              style={{backgroundColor:"rgb(245, 232, 216)", color:"black", border: "None"}}
              onClick={handleShowIssue}
              ><FaPlus style={{ fontSize: "25px"}} /></Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
            <Table bordered hover variant="light" responsive>
                <thead>
                  {issueArray.length > 0 &&
                      <tr>
                      <th>Sr. No.</th>
                      <th>Description</th>
                      <th>Severity</th>
                      <th>Complexity</th>
                      <th>Impact</th>
                      <th>Responsible Party</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  }
                </thead>

                <tbody>

                    { issueArray.length > 0 && issueArray.map((x, index)=>{
                          return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{x.IssueDescription }</td>
                                <td>{x.IssueSeverity }</td>
                                <td>{x.IssueComplexity}</td>
                                <td>{x.IssueImpact}</td>
                                <td>{x.IssueResponsibleParty}</td>

                                <td><Form.Control
                        className="ms-3"
                        type="text"
                        id="exampleColorInput"
                        title="Choose your color"
                        disabled
                        size="sm"
                        style={{backgroundColor:x.IssueStatus==="R" ? "#c21a08": 
                        x.IssueStatus==="A" ? "#FF5733": "#2dad42", width:80}}/></td>
                                
                                <td>
                                <Button variant="light" 
                                style={{color:"black", border: "None"}}
                                onClick={() => IssueDelete(x.IssueDescription)}
                                >
                                    <MdDelete style={{ fontSize: "20px", color:'black' }} />
                                  </Button> 
                                </td>
                              </tr>   
                          )
                        })
                      }
                  
                </tbody>
          </Table>
            </Col>
          </Row>
        </Container>

        <hr />

        
        {/*-----------------------------------Dependency Section--------------------*/}
        <Container>
          <Row>
            <Col xs={10}>
              <div className="justify-content-start">
                <Form.Label>
                  <h5>Dependency</h5>
                </Form.Label>
              </div>
            </Col>

            <Col>
              <div className="justify-content-end">
              <Button 
              style={{backgroundColor:"rgb(245, 232, 216)", color:"black", border: "None"}} 
              onClick={handleShowDependency}
              ><FaPlus style={{ fontSize: "25px"}} /></Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
            <Table bordered hover variant="light" responsive>
                <thead>
                  {dependencyArray.length > 0 &&
                      <tr>
                      <th>Sr. No.</th>
                      <th>Description</th>
                      <th>Target Comlpletion Date</th>
                      <th>Responsible Party</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  }
                </thead>

                <tbody>

                    { dependencyArray.length > 0 && dependencyArray.map((x, index)=>{
                          return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{x.DependencyDescription}</td>
                                <td>{x.TargetCompletionDate}</td>
                                <td>{x.DependencyResponsibleParty}</td>

                                <td><Form.Control
                        className="ms-3"
                        type="text"
                        id="exampleColorInput"
                        title="Choose your color"
                        disabled
                        size="sm"
                        style={{backgroundColor:x.DependencyStatus==="R" ? "#c21a08": 
                        x.DependencyStatus==="A" ? "#FF5733": "#2dad42", width:80}}/></td>

                                <td>
                                  <Button variant="light" 
                                  style={{color:"black", border: "None"}}
                                  onClick={() => DependencyDelete(x.DependencyDescription)}
                                  >
                                    <MdDelete style={{ fontSize: "20px", color:'black' }} />
                                  </Button> 
                                </td>
                              </tr>   
                          )
                        })
                      }
                  
                </tbody>
          </Table>
            </Col>
          </Row>
        </Container>

      {/* ----------------------------Assumptions Modal---------------------------------------------*/}
      <Modal show={showAssumption} onHide={handleCloseAssumption}>

        <Form>

            <Modal.Header closeButton>
            <Modal.Title>Assumptions Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <Form.Group className="mb-3" size="lg" controlId="password">
                      <Form.Label className="mt-1"><h6>Assumptions</h6></Form.Label>
                      <Form.Control type="text"
                      name="Assumption"
                      value={Assumption}
                      onChange={(e)=>onAssupmtionChange(e)}
                      />
                    </Form.Group>
            </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAssumption}>
              Close
            </Button>
            <Button variant="primary" onClick={HandleSubmitAssumptionsArray}>
              Save
            </Button>
          </Modal.Footer>

        </Form>

      </Modal>

      {/* ----------------------------Risk Modal---------------------------------------------*/}
      <Modal show={showRisk} onHide={handleCloseRisk}>

        <Form>

        <Modal.Header closeButton>
        <Modal.Title>Risk Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-1">Description</Form.Label>
                  <Form.Control type="text"
                  name="RiskDescription"
                  value={RiskDescription}
                  onChange={(e)=>onRiskChange(e)}
                   />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Severity</Form.Label>
                  <Form.Control type="text"
                  name="RiskSeverity"
                  value={RiskSeverity}
                  onChange={(e)=>onRiskChange(e)}
                   />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Complexity</Form.Label>
                  <Form.Control type="text"
                  name="RiskComplexity"
                  value={RiskComplexity}
                  onChange={(e)=>onRiskChange(e)}
                   />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Impact</Form.Label>
                  <Form.Control type="text" 
                  name="RiskImpact"
                  value={RiskImpact}
                  onChange={(e)=>onRiskChange(e)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Mitigation Plan</Form.Label>
                  <Form.Control type="text"
                  name="MitigationPlan"
                  value={MitigationPlan}
                  onChange={(e)=>onRiskChange(e)}
                   />
                </Form.Group>

                <Form.Group className="mb-3" size="lg" controlId="password">
                <Form.Label className="mt-3">Status</Form.Label>

                          <Form.Select 
                          name="RiskStatus" 
                          value={RiskStatus} 
                          onChange={(e)=>onRiskChange(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:RiskStatus==="R" ? "#c21a08": RiskStatus==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            
                            <option value="R" style={{backgroundColor:"#f56153", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseRisk}>
          Close
        </Button>
        <Button variant="primary" onClick={HandleSubmitRiskArray}>
          Save
        </Button>
      </Modal.Footer>

        </Form>

      </Modal>

      {/* ----------------------------Issue Modal---------------------------------------------*/}
      <Modal show={showIssue} onHide={handleCloseIssue}>

        <Form>

            <Modal.Header closeButton>
            <Modal.Title>Issue Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>

                    <Form.Group size="lg" controlId="password">
                          <Form.Label className="mt-1">
                            Description
                          </Form.Label>
                          <Form.Control type="text" 
                           name="IssueDescription"
                           value={IssueDescription}
                           onChange={(e)=>onIssueChange(e)}
                          />
                        </Form.Group>

                        <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                    Severity
                  </Form.Label>
                  <Form.Control type="text" 
                  name="IssueSeverity"
                  value={IssueSeverity}
                  onChange={(e)=>onIssueChange(e)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                    Complexity
                  </Form.Label>
                  <Form.Control type="text" 
                  name="IssueComplexity"
                  value={IssueComplexity}
                  onChange={(e)=>onIssueChange(e)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                    Impact
                  </Form.Label>
                  <Form.Control type="text" 
                  name="IssueImpact"
                  value={IssueImpact}
                  onChange={(e)=>onIssueChange(e)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                    Responsible Party
                  </Form.Label>
                  <Form.Control type="text" 
                  name="IssueResponsibleParty"
                  value={IssueResponsibleParty}
                  onChange={(e)=>onIssueChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-2" size="lg" controlId="password">
                <Form.Label className="mt-3">Status</Form.Label>

                          <Form.Select 
                          name="IssueStatus" 
                          value={IssueStatus} 
                          onChange={(e)=>onIssueChange(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:IssueStatus==="R" ? "#c21a08": IssueStatus==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            
                            <option value="R" style={{backgroundColor:"#f56153", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>

            </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseIssue}>
              Close
            </Button>
            <Button variant="primary" onClick={HandleSubmitIssueArray}>
              Save
            </Button>
          </Modal.Footer>

        </Form>
      
      </Modal>


      {/* ----------------------------Dependency Modal---------------------------------------------*/}
      <Modal show={showDependency} onHide={handleCloseDependency}>

        <Form>

        <Modal.Header closeButton>
        <Modal.Title>Dependencies Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>

      <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-1">
                    Description
                  </Form.Label>
                  <Form.Control type="text" 
                  name="DependencyDescription"
                  value={DependencyDescription}
                  onChange={(e)=>onDependencyChange(e)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                    Target Completion Date
                  </Form.Label>
                  <Form.Control type="date" 
                  name="TargetCompletionDate"
                  value={TargetCompletionDate}
                  onChange={(e)=>onDependencyChange(e)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                   Responsible Party
                  </Form.Label>
                  <Form.Control type="text"
                   name="DependencyResponsibleParty"
                   value={DependencyResponsibleParty}
                   onChange={(e)=>onDependencyChange(e)} 
                  />
                </Form.Group>


                <Form.Group className="mb-2" size="lg" controlId="password">
                <Form.Label className="mt-3">Status</Form.Label>

                          <Form.Select 
                          name="DependencyStatus" 
                          value={DependencyStatus} 
                          onChange={(e)=>onDependencyChange(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor: DependencyStatus==="R" ? "#c21a08": DependencyStatus==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >

                            <option value="R" style={{backgroundColor:"#f56153", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>

        </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseDependency}>
          Close
        </Button>
        <Button variant="primary" onClick={HandleSubmitDependencyArray}>
          Save
        </Button>
      </Modal.Footer>

        </Form>

      </Modal>

      </Container>
    </>
  );
};

export default AddWeekDataPage3;
