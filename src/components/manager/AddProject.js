
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function AddProjectTrial() {
  let navigate = useNavigate();
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState({
    project_name: "",
    summary: "",
    client_name:"",
    start_date: "",
    end_date: "",
    user: 0
  });
  
  // To destructure JSON object
  const { project_name, summary, client_name, start_date, end_date, user } = project;

// Code To Get User Id 
const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(()=>{

    async function getProjectList(){
        try {
            // const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projects/", config);
            const projList = await axios.get("http://127.0.0.1:8000/api/projectplan/projectsapi/", config);
            console.log("Get projectList Data",projList.data);
            setProjectList(projList.data);
            // console.log('projectList:-', projectList[0].user)
        }catch (error){
            console.log("Data fetching Error Occured in Project List");
        }
    }

    getProjectList();
    

}, []);

if(projectList.length > 0){
  console.log('projectList:-', projectList[0].user)
}
  

  
  const onInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value});
    setProject(updateUser => {return {...updateUser, user: projectList[0].user}})
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('project data Array:',project);

    try{
      console.log("API Call")

      // await axios.post('http://127.0.0.1:8000/api/projectplan/projects/',project)
      await axios.post('http://127.0.0.1:8000/api/projectplan/projectsapi/',project)
      // .then((response)=>{console.log(response.data)});
      alert("Project Added Successfully")
      navigate('/adminHome')
    }
    catch(error){
      console.log('error:', error);
      console.log("error occur in data post");
    }
    // navigate("/");
  };

  return (
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{border: 'rounded solid 6px',backgroundColor:'#E4F1FF',borderRadius:'10px'}}>
          <h2 className="text-center m-4 fs-3" style={{fontFamily: 'Apple Chancery',fontWeight:'bold'}}>Add Project</h2>

          <form onSubmit={onSubmit} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ml-0" style={{fontWeight:'bold'}}>
                Project Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Project Name"
                name="project_name"
                value={project_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Summary" className="form-label ml-0" style={{fontWeight:'bold'}}>
                Summary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter project summary"
                name="summary"
                value={summary}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="client_name" className="form-label ml-0" style={{fontWeight:'bold'}}>
                Client Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Client Name"
                name="client_name"
                value={client_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            
            <div className="mb-3">
              <label htmlFor="start_date" className="form-label ml-0" style={{fontWeight:'bold'}}>
                Start Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter the start date"
                name="start_date"
                value={start_date}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="end_date" className="form-label fs-6 ml-0" style={{fontWeight:'bold'}}>
                Planned End Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter planned end date"
                name="end_date"
                value={end_date}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <Button type="submit" className="btn " style={{fontWeight:'bold',borderRadius:'10px',borderRadius:'5px',color:'white',backgroundColor: 'hsl(244, 77%, 14%)'}}>
              Add Project
            </Button>
            <Link className="btn btn-outline-danger mx-2" to="/AdminHome">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
