import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import { Link,useNavigate, useParams } from 'react-router-dom';

export default function UpdateManager() {
  
    let navigate = useNavigate();
    const { id } = useParams();

    const [updateManagerData, setUpdateManagerData] = useState({});
useEffect(() => {
    if (id) {
    axios.get(`http://localhost:8000/api/particularManager/${id}`).then(
    res => {
       console.log(res.data);
       console.log(res.data[0]);
       setUpdateManagerData(res.data[0]);
     });}
},[id]);

console.log(updateManagerData);
console.log(updateManagerData.name);

const getNewManagerData = (event) => {
       setUpdateManagerData({ ...updateManagerData, [event.target.name]: event.target.value });
        console.log(updateManagerData);
 }

 const onHandleUpdate = () => {
  axios.put(`http://localhost:8000/api/update/${id}/`, updateManagerData)
 .then(
   res => {
      console.log(updateManagerData);
      console.log(res.data);
     }).catch(error => {
   console.error(error);
 })
 alert("Manager details updated successfully");
 
 navigate("/adminPage");
}

    
  

  return (
    <>
    {console.log("in update")}
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{border: 'rounded solid 6px',backgroundColor:'#E4F1FF',borderRadius:'10px'}}>
          <h2 className="text-center m-4 fs-3" style={{fontFamily: 'Apple Chancery',fontWeight:'bold'}}>Update Project Manager</h2>

          <form onSubmit={onHandleUpdate} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{marginLeft:'-390px',fontWeight:'bold'}}>
                 Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={updateManagerData.name}
                onChange={getNewManagerData}
              />
            </div>
            
            

            <div className="mb-3">
              <label htmlFor="Address" className="form-label" style={{marginLeft:'-320px',fontWeight:'bold'}}>
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={updateManagerData.email}
                onChange={getNewManagerData}
              />
            </div>
            

            <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{marginLeft:'-390px',fontWeight:'bold'}}>
                 Phone No.
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter phone no."
                name="phone"
                value={updateManagerData.phone}
                onChange={getNewManagerData}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{marginLeft:'-390px',fontWeight:'bold'}}>
                 Designation
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter designation"
                name="designation"
                value={updateManagerData.designation}
                onChange={getNewManagerData}
              />
            </div>


            <button onSubmit={onHandleUpdate} type="submit" className="btn " style={{fontWeight:'bold',borderRadius:'10px',borderRadius:'5px',color:'white',backgroundColor: 'hsl(244, 77%, 14%)'}}>
              Update Manager
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
