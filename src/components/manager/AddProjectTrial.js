
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function AddProjectTrial() {
  let navigate = useNavigate();
  const [project, setProject] = useState({
    projectName: "",
    projectManagerName: "",
    startDate: "",
    plannedEndDate: "",
  });
  
  const { projectName, projectManagerName, startDate, plannedEndDate } = project;
  const onInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:8000/api/create/", project);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{border: 'rounded solid 6px', borderColor: 'hsl(244, 77%, 14%)',backgroundColor:'#E4F1FF',borderRadius:'10px'}}>
          <h2 className="text-center m-4 fs-3" style={{fontFamily: 'Apple Chancery',fontWeight:'bold'}}>Add Project</h2>

          <form onSubmit={(e) => onSubmit(e)} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{marginLeft:'-390px',fontWeight:'bold'}}>
                Project Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter project name"
                name="projectName"
                value={projectName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            

            <div className="mb-3">
              <label htmlFor="Address" className="form-label" style={{marginLeft:'-320px',fontWeight:'bold'}}>
                Project Manager Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter project manager name"
                name="projectManagerName"
                value={projectManagerName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label" style={{marginLeft:'-420px',fontWeight:'bold'}}>
                Start Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter the start date"
                name="startDate"
                value={startDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Phone" className="form-label fs-6" style={{marginLeft:'-370px',fontWeight:'bold'}}>
                Planned End Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter planned end date"
                name="plannedEndDate"
                value={plannedEndDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>


            <button type="submit" className="btn " style={{fontWeight:'bold',borderRadius:'10px',borderRadius:'5px',color:'white',backgroundColor: 'hsl(244, 77%, 14%)'}}>
              Add Project
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
