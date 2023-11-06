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
  const [run, setRun] = useState({
    PlannedStartDate: "",
    PlannedEndDate: "",
    RevisedEndDate: "",
    Status: "",
    Remark: ""
  });

  const [keyAccompolish, setKeyAccompolish] = useState();
  const [activitiesPlanned, setActivitiesPlanned] = useState();
  const [risk, setRisk] = useState();
  const [issue, setIssue] = useState();
  const [assumptions, setAssumptions] = useState();
  const [dependencies, setDependencies] = useState();
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
                <h6>Phase Wise Timeline</h6>
                <hr />
                <p>5. Run</p>
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-1">Planned Start Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Planned End Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Revised End Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Status</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Remark</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <hr />

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Key Accomplishment</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <hr />
              </Container>

              <div class="d-flex" style={{height: 700, marginLeft:20, marginRight:20}}>
                <div class="vr"></div>
              </div>

              <Container className="formPart2">
                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">
                    Activities Planned For Next Week
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <hr />

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Risk</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <hr />

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Issue</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select</option>
                    <option value="1">Red</option>
                    <option value="2">Amber</option>
                    <option value="3">Green</option>
                  </Form.Select>
                </Form.Group>

                <hr />

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-1">Assumptions</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <hr />

                <Form.Group size="lg" controlId="password">
                  <Form.Label className="mt-3">Dependencies</Form.Label>
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

export default AddWeekDataPage3;
