import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { useNavigate  } from 'react-router-dom';


const WeekReportModal = (props) => {
  // Props details are comming from project details page..
    console.log('project id in Modal', props.projectID);
    const navigate = useNavigate();
    const [projectDetails, setProjectDetails] = useState([]);
    const [startWeekDate, setStartWeekDate] = useState("");
    const [endWeekDate, setEndWeekDate] = useState("");
  
    // ----------------Code For First & Last day of week----------------------
    // const date = "YYY-MM-DD"; Date format

    let date_today = new Date();

    console.log(`The current day index of the week is: ${date_today.getDay()}`);

    console.log(`The current date of the week is: ${date_today.getDate()}`);

    let first_day_of_the_week = new Date(date_today.setDate(date_today.getDate() 
                                - date_today.getDay() + 1 ));

    let last_day_of_the_week = new Date(date_today.setDate(date_today.getDate() 
                                - date_today.getDay() + 5));

    let Week_Start_Date;
    console.log(`The first date of the week is: ${first_day_of_the_week}`); 
    console.log(`First Date Lenght: ${first_day_of_the_week.getDate().toString().length}`);
    if(first_day_of_the_week.getDate().toString().length === 1){
        Week_Start_Date = `${first_day_of_the_week.getFullYear()}-${first_day_of_the_week.getMonth()+1}-${0}${first_day_of_the_week.getDate()}`;
    }else{
        Week_Start_Date = `${first_day_of_the_week.getFullYear()}-${first_day_of_the_week.getMonth()+1}-${first_day_of_the_week.getDate()}`;
    }
    console.log('Week_Start_Date:', Week_Start_Date);

    let Week_End_Date;
    console.log(`The last day of the week is: ${last_day_of_the_week}`);
    console.log(`End Date Lenght: ${last_day_of_the_week.getDate().toString().length}`);
    if(last_day_of_the_week.getDate().toString().length === 1){
        Week_End_Date = `${last_day_of_the_week.getFullYear()}-${last_day_of_the_week.getMonth()+1}-${0}${last_day_of_the_week.getDate()}`;
    }else{
        Week_End_Date = `${last_day_of_the_week.getFullYear()}-${last_day_of_the_week.getMonth()+1}-${last_day_of_the_week.getDate()}`;
    }
    console.log('Week_End_Date:', Week_End_Date);


    // ---------------------------------Code to get Project Name by Id-----------------------------------------
    useEffect(()=>{

        async function getProjectDetails(){
            try {
                const projDetails = await axios.get(`http://127.0.0.1:8000/api/projectplan/projectsapi/${props.projectID}/`);
                console.log("Get projectList Data in Modal",projDetails.data);
                setProjectDetails(projDetails.data);
            }catch (error){
                console.log("Data fetching Error Occured in Project Details");
            }
        }
    
        getProjectDetails();

        setStartWeekDate(Week_Start_Date);
        setEndWeekDate(Week_End_Date);

    
    }, []);


    // ----------------Code for handle form submit--------------------------------
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios({
            baseURL: 'http://127.0.0.1:8000/api/projectplan/weeklyreportapi/',
            method: "POST",
            data: {
                project: projectDetails.id,
                week_start_date: startWeekDate,
                week_end_date: endWeekDate
            },
          })
            .then((res) => {
              if (res.status === 201) {
                console.log("result.data:",res.data);
                console.log("result.data[1]:",res.data["Data"].id);
                localStorage.setItem("ReportID", res.data["Data"].id);
                // window.location.href = "/manager/addWeekDataPage1";
                navigate("/manager/addWeekDataPage1");
              }
            })
            .catch((error) => {
              console.log("ERROR", error);
              alert("This report has been already created. You can go to weekly reports and update this report.")
              // window.location.href = "/manager/addWeekDataPage1";
            });
    }
    
    console.log('startWeekDate:', startWeekDate);
    console.log('endWeekDate:', endWeekDate);
    
    
    

  return (
    <Modal
    //   {...props}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Weekly Report Form
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Project Name</Form.Label>
        <Form.Control
        type="text" 
        value={projectDetails.project_name}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Week Start Date</Form.Label>
        <Form.Control 
        type="date"
        value={startWeekDate}
        onChange={(e)=> setStartWeekDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Week End Date</Form.Label>
        <Form.Control 
        type="date"
        value={endWeekDate}
        onChange={(e)=> setEndWeekDate(e.target.value)}
        />
      </Form.Group>
    </Form>
    
      </Modal.Body>

      <Modal.Footer>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  )
}

export default WeekReportModal