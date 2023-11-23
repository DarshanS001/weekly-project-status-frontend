import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import "./AddWeekDataPage3.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Heading from "../../Heading";

const AddWeekDataPage3 = () => {

   // To get the project report ID from Week Report Modal.js  
   console.log("Report ID From local storage:",localStorage.getItem("ReportID"));
   const ReportID = localStorage.getItem("ReportID");
   console.log("ReportID:=", ReportID);

  const [keyAccompolishment, setKeyAccompolishment] = useState({
    KeyReportId: ReportID,
    DescriptionKey:""
  });

  const [assumptions, setAssumptions] = useState({
    AssumptionReportId: ReportID,
    Assumption: ""
  });

  const [risk, setRisk] = useState({
    RiskReportId: ReportID,
    RiskDescription: "",
    RiskSeverity: "",
    RiskComplexity: "",
    RiskImpact:"",
    MitigationPlan:"",
    RiskStatus: "R"
  });

  
  const [issue, setIssue] = useState({
    IssueReportId: ReportID,
    IssueDescription: "",
    IssueSeverity: "",
    IssueComplexity: "",
    IssueImpact:"",
    IssueResponsibleParty: "",
    IssueStatus: "R"
  });
  
  const [dependencies, setDependencies] = useState({
    DependencyReportId: ReportID,
    DependencyDescription: "",
    TargetCompletionDate: "",
    DependencyResponsibleParty: "",
    DependencyStatus: "R"
  });

  const { KeyReportId, DescriptionKey } = keyAccompolishment;
  const { AssumptionReportId, Assumption } = assumptions;
  const { RiskReportId, RiskDescription, RiskSeverity, RiskComplexity, 
    RiskImpact, MitigationPlan, RiskStatus} = risk;
  
  const { IssueReportId, IssueDescription, IssueSeverity, IssueComplexity, 
    IssueImpact, IssueResponsibleParty, IssueStatus} = issue;
  
  const { DependencyReportId, DependencyDescription, TargetCompletionDate, 
    DependencyResponsibleParty, DependencyStatus} = dependencies;


  const onKeyAccomplishChange = (e) => {
    setKeyAccompolishment({...keyAccompolishment, [e.target.name]:e.target.value});
  }

  const onAssupmtionChange = (e) => {
    setAssumptions({...assumptions, [e.target.name]:e.target.value});
  }

  const onRiskChange = (e) => {
    setRisk({...risk, [e.target.name]:e.target.value});
  }

  const onIssueChange = (e) => {
    setIssue({...issue, [e.target.name]:e.target.value});
  }

  const onDependencyChange = (e) => {
    setDependencies({...dependencies, [e.target.name]:e.target.value});
  }

  console.log("Key Accompolishment:", keyAccompolishment);
  console.log("Assumption:", assumptions);
  console.log("Risk:", risk);
  console.log("Issue:", issue);
  console.log("Dependencies:", dependencies);
 
  const HandleSubmit = (e) => {
    e.preventDefault();

// =====================API For Accomplishment==============================================
    axios({
      baseURL: 'http://127.0.0.1:8000/api/projectplan/accomplishmentsapi/',
      method: "POST",
      data: {
        report:KeyReportId,
        Description:DescriptionKey
      },
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("result.data in Accomplishment API:",res.data);
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
        alert("There is some error in Key Accomplishment API");
      });


  // =====================API For Assumptions==============================================
  axios({
    baseURL: 'http://127.0.0.1:8000/api/projectplan/assumptionsapi/',
    method: "POST",
    data: {
      report:AssumptionReportId,
      assumption:Assumption
    },
  })
    .then((res) => {
      if (res.status === 201) {
        console.log("result.data in Assuption API:",res.data);
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
      alert("There is some error in Assumption API");
    });


   // =====================API For Risk==============================================
   axios({
    baseURL: 'http://127.0.0.1:8000/api/projectplan/riskapi/',
    method: "POST",
    data: {
      report:RiskReportId,
      risk_description:RiskDescription,
      severity:RiskSeverity,
      complexity:RiskComplexity,
      impact:RiskImpact,
      mitigation_plan:MitigationPlan,
      RAGStatus:RiskStatus
    },
  })
    .then((res) => {
      if (res.status === 201) {
        console.log("result.data in Risk API:",res.data);
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
      alert("There is some error in Risk API");
    });


  // =====================API For Issue==============================================
  axios({
    baseURL: 'http://127.0.0.1:8000/api/projectplan/issueapi/',
    method: "POST",
    data: {
        report: IssueReportId,
        issue_description:IssueDescription,
        severity:IssueSeverity,
        complexity:IssueComplexity,
        impact:IssueImpact,
        responsible_party:IssueResponsibleParty,
        RAGStatus:IssueStatus
    },
  })
    .then((res) => {
      if (res.status === 201) {
        console.log("result.data in Issue API:",res.data);
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
      alert("There is some error in Issue API");
    });


  // =====================API For Dependencies==============================================
  axios({
    baseURL: 'http://127.0.0.1:8000/api/projectplan/dependancyapi/',
    method: "POST",
    data: {
      report: DependencyReportId,
      dependency_description: DependencyDescription,
      target_completion_date: TargetCompletionDate,
      responsible_party: DependencyResponsibleParty,
      RAGStatus: DependencyStatus
    },
  })
    .then((res) => {
      if (res.status === 201) {
        console.log("result.data in Dependency API:",res.data);
        alert("Form Data Added Successfully")
      }
    })
    .catch((error) => {
      console.log("ERROR", error);
      alert("There is some error in Dependency API");
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
                  Save
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
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3"><h6>Key Accomplishment</h6></Form.Label>
                  <Form.Control type="text"
                  name="DescriptionKey"
                  value={DescriptionKey} 
                  onChange={(e)=>onKeyAccomplishChange(e)}
                  />
                </Form.Group>
                <hr />

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3"><h6>Assumptions</h6></Form.Label>
                  <Form.Control type="text"
                  name="Assumption"
                  value={Assumption}
                  onChange={(e)=>onAssupmtionChange(e)}
                   />
                </Form.Group>
                <hr />

                <Form.Label className="mt-3"><h6>Risk</h6></Form.Label>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Description</Form.Label>
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

                <Form.Group size="lg" controlId="password">
                <Form.Label className="mt-3">Status</Form.Label>

                          <Form.Select 
                          name="RiskStatus" 
                          value={RiskStatus} 
                          onChange={(e)=>onRiskChange(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:RiskStatus==="R" ? "#f56153": RiskStatus==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#f56153", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>

                        <hr/>

                      <Form.Label className="mt-3"><h6>Issue</h6></Form.Label>

                        <Form.Group size="lg" controlId="password">
                          <Form.Label className="mt-3">
                            Description
                          </Form.Label>
                          <Form.Control type="text" 
                           name="IssueDescription"
                           value={IssueDescription}
                           onChange={(e)=>onIssueChange(e)}
                          />
                        </Form.Group>

              </Container>

              <div class="d-flex" style={{height: 700, marginLeft:20, marginRight:20}}>
                <div class="vr"></div>
              </div>

              <Container className="formPart2">

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

                <Form.Group size="lg" controlId="password">
                <Form.Label className="mt-3">Status</Form.Label>

                          <Form.Select 
                          name="IssueStatus" 
                          value={IssueStatus} 
                          onChange={(e)=>onIssueChange(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor:IssueStatus==="R" ? "#f56153": IssueStatus==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#f56153", color:"white"}}>Red</option>
                            <option value="A" style={{backgroundColor:"#FF5733", color:"white"}}>Amber</option>
                            <option value="G" style={{backgroundColor:"#2dad42", color:"white"}}>Green</option>
                          </Form.Select>
                        </Form.Group>

                <hr />

                <Form.Label className="mt-3"><h6>Dependency</h6></Form.Label>
                  
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
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


                <Form.Group size="lg" controlId="password">
                <Form.Label className="mt-3">Status</Form.Label>

                          <Form.Select 
                          name="DependencyStatus" 
                          value={DependencyStatus} 
                          onChange={(e)=>onDependencyChange(e)} 
                          aria-label="Default select example"
                          style={{backgroundColor: DependencyStatus==="R" ? "#f56153": DependencyStatus==="A" ? 
                          "#FF5733": "#2dad42", color:"white"}}
                          >
                            {/* <option selected disabled>
                              Select Status
                            </option> */}
                            <option value="R" style={{backgroundColor:"#f56153", color:"white"}}>Red</option>
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

export default AddWeekDataPage3;
