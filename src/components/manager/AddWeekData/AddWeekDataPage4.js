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

const AddWeekDataPage4 = () => {
     // -------------------Accompolishment Modal---------------------------------------
  const [showAccomplishment, setShowAccomplishment] = useState(false);

  const handleCloseAccomplishment = () => setShowAccomplishment(false);
  const handleShowAccomplishment = () => setShowAccomplishment(true);

  // -------------------TaskTodo Modal---------------------------------------
  const [showTaskTodo, setShowTaskTodo] = useState(false);

  const handleCloseTaskTodo = () => setShowTaskTodo(false);
  const handleShowTaskTodo = () => setShowTaskTodo(true);

 

  // To get the project report ID from Week Report Modal.js
  console.log(
    "Report ID From local storage:",
    localStorage.getItem("ReportID")
  );
  const ReportID = localStorage.getItem("ReportID");
  console.log("ReportID:=", ReportID);

// --------------------All JSON's To store data from form--------------------------------
  const [keyAccompolishment, setKeyAccompolishment] = useState({
    KeyReportId: ReportID,
    DescriptionKey: "",
  });

  const [TaskTodo, setTaskTodo] = useState({
    TaskReportId: ReportID,
    DescriptionTask: "",
    AssigneeTask: "",
  });


  const { KeyReportId, DescriptionKey } = keyAccompolishment;
  const { TaskReportId, DescriptionTask,  AssigneeTask} = TaskTodo;


  // -----------------------All JSON data array to display tables in each section locally--------------
  const [accomplishmentArray, setAccomplishmentArray] = useState([]);
  const [TaskTodoArray, setTaskTodoArray] = useState([]);

  

  // ----------------------------All Inputs OnChange Functions--------------------------------
  const onKeyAccomplishChange = (e) => {
    setKeyAccompolishment({
      ...keyAccompolishment,
      [e.target.name]: e.target.value,
    });
  };


  const onTaskTodoChange = (e) => {
    setTaskTodo({
      ...TaskTodo,
      [e.target.name]: e.target.value,
    });
  };



  console.log("Key Accompolishment:", keyAccompolishment);
  console.log("Task Todo:", TaskTodo);

  
  // -------------Handle Submit for All modal Form-----------------------------------
  const HandleSubmitAccomplishmentArray = (e) =>{
    e.preventDefault();
    setAccomplishmentArray(AccomplishArray => [...AccomplishArray, keyAccompolishment]);
    setShowAccomplishment(false);
  }

  const HandleSubmitTaskTodoArray = (e) =>{
    e.preventDefault();
    setTaskTodoArray(TaskArray => [...TaskArray, TaskTodo]);
    setShowTaskTodo(false);
  }


  console.log("Key Accompolishment Array:", accomplishmentArray);
  console.log("Task Todo Array:", TaskTodoArray);


  // ----------------------Making Data Ready to Post------------------------------
  // ----------------------Accomlishment for loop-----------------------------------
  let accomplishPostData = []

  if(accomplishmentArray.length){
    for(let i=0; i<accomplishmentArray.length; i++){
      let report = accomplishmentArray[i].KeyReportId;
      let Description = accomplishmentArray[i].DescriptionKey;
      accomplishPostData.push({report, Description});
  } 
  }
  
  console.log("accomplishPostData after:", accomplishPostData);


   // ----------------------Task Todo for loop-----------------------------------
   let taskTodoPostData = []

   if(TaskTodoArray.length){
     for(let i=0; i<TaskTodoArray.length; i++){
       let report = TaskTodoArray[i].TaskReportId;
       let description = TaskTodoArray[i].DescriptionTask;
       let assignee = TaskTodoArray[i].AssigneeTask;
       taskTodoPostData.push({report, description, assignee});
   } 
   }
   
   console.log("taskTodoPostData after:", taskTodoPostData);

  // --------------------------------------------------------------------------------------
  // -------------Handle Delete for All Table Array-----------------------------------
  const AccomplishmentDelete=(AccompDescription)=>{
    console.log("DelID", AccompDescription);
    const newAccomplish = accomplishmentArray.filter((obj)=>obj.DescriptionKey !== AccompDescription)
    console.log("In Accomplish Delete", newAccomplish);
    setAccomplishmentArray(newAccomplish);
  }

  const TAskTodoDelete=(TaskDescription)=>{
    console.log("DelID", TaskDescription);
    const newTask = TaskTodoArray.filter((obj)=>obj.DescriptionTask !== TaskDescription)
    console.log("In Task Todo Delete", newTask);
    setTaskTodoArray(newTask);
  }


  // -------------------------------API Submit----------------------------------------
  const HandleSubmit = (e) => {
    e.preventDefault();

    // =====================API For Accomplishment==============================================
      axios({
        baseURL: "http://127.0.0.1:8000/api/projectplan/accomplishmentsapi/",
        method: "POST",
        // data: {
        //   report: KeyReportId,
        //   Description: DescriptionKey,
        // },
        
        data: accomplishPostData,
       
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in Accomplishment API:", res.data);
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("There is some error in Key Accomplishment API");
        });


        // =====================API For Task Todo==============================================
      axios({
        baseURL: "http://127.0.0.1:8000/api/projectplan/tasktodoapi/",
        method: "POST",
        data: taskTodoPostData,
       
      })
        .then((res) => {
          if (res.status === 201) {
            console.log("result.data in Task Todo API:", res.data);
            alert("Form Data Added Successfully");
          }
        })
        .catch((error) => {
          console.log("ERROR", error);
          alert("There is some error in Task Todo API");
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
                  Submit
                </Button>
              </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      <Container className="MainContainer">

      {/*-----------------------------------Key Accomplishment Section--------------------*/}
        <Container>
          <Row>
            <Col xs={10}>
              <div className="justify-content-start">
                <Form.Label>
                  <h5>Key Accomplishment</h5>
                </Form.Label>
              </div>
            </Col>

            <Col>
              <div className="justify-content-end">
              <Button 
              style={{backgroundColor:"rgb(245, 232, 216)", color:"black", border: "None"}}
              onClick={handleShowAccomplishment}
              ><FaPlus style={{ fontSize: "25px"}} /></Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
                  <Table bordered hover variant="light" responsive>
                      <thead>
                        {accomplishmentArray.length > 0 &&
                            <tr>
                            <th>Sr. No.</th>
                            <th>Description</th>
                            <th>Action</th>
                          </tr>
                        }
                      </thead>

                      <tbody>

                          { accomplishmentArray.length > 0 && accomplishmentArray.map((x, index)=>{
                                return(
                                  <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{x.DescriptionKey}</td>
                                      <td>
                                      <Button variant="light" 
                                      style={{color:"black", border: "None"}}
                                      onClick={() => AccomplishmentDelete(x.DescriptionKey)}
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


        {/*-----------------------------------Task Todo Section--------------------*/}
        <Container>
          <Row>
            <Col xs={10}>
              <div className="justify-content-start">
                <Form.Label>
                  <h5>Task Todo</h5>
                </Form.Label>
              </div>
            </Col>

            <Col>
              <div className="justify-content-end">
              <Button 
              style={{backgroundColor:"rgb(245, 232, 216)", color:"black", border: "None"}}
              onClick={handleShowTaskTodo}
              ><FaPlus style={{ fontSize: "25px"}} /></Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
                  <Table bordered hover variant="light" responsive>
                      <thead>
                        {TaskTodoArray.length > 0 &&
                            <tr>
                            <th>Sr. No.</th>
                            <th>Description</th>
                            <th>Assignee</th>
                            <th>Action</th>
                          </tr>
                        }
                      </thead>

                      <tbody>

                          { TaskTodoArray.length > 0 && TaskTodoArray.map((x, index)=>{
                                return(
                                  <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{x.DescriptionTask}</td>
                                      <td>{x.AssigneeTask}</td>
                                      <td>
                                      <Button variant="light" 
                                      style={{color:"black", border: "None"}}
                                      onClick={() => TAskTodoDelete(x.DescriptionTask)}
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

        
        {/* ----------------------------Accomplishment Modal---------------------------------------------*/}
        <Modal show={showAccomplishment} onHide={handleCloseAccomplishment}>

        <Form>
        <Modal.Header closeButton>
          <Modal.Title>Key Accomplishment Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Group className="mb-3" size="lg" controlId="password">
          <Form.Label className="mt-3"><h6>Key Accomplishment</h6></Form.Label>
            <Form.Control type="text"
                      name="DescriptionKey"
                      value={DescriptionKey} 
                      onChange={(e)=>onKeyAccomplishChange(e)}
                      />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAccomplishment}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleSubmitAccomplishmentArray}>
            Save
          </Button>
        </Modal.Footer>
        </Form>
        
      </Modal>


       {/* ----------------------------Task Todo Modal---------------------------------------------*/}
                <Modal show={showTaskTodo} onHide={handleCloseTaskTodo}>

                <Form>
                <Modal.Header closeButton>
                <Modal.Title>Task Todo Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form.Group className="mb-3" size="lg" controlId="password">
                <Form.Label className="mt-3"><h6>Task Description</h6></Form.Label>
                    <Form.Control type="text"
                            name="DescriptionTask"
                            value={DescriptionTask} 
                            onChange={(e)=>onTaskTodoChange(e)}
                            />

                <Form.Label className="mt-3"><h6>Task Assignee</h6></Form.Label>
                    <Form.Control type="text"
                            name="AssigneeTask"
                            value={AssigneeTask} 
                            onChange={(e)=>onTaskTodoChange(e)}
                            />
                </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTaskTodo}>
                    Close
                </Button>
                <Button variant="primary" onClick={HandleSubmitTaskTodoArray}>
                    Save
                </Button>
                </Modal.Footer>
                </Form>

                </Modal>

      </Container>
    </>
  )
}

export default AddWeekDataPage4