import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { faL } from '@fortawesome/free-solid-svg-icons';
import ErrorModal from '../dashboard/ErrorModal';

const Settings = () => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();
    const [error,setError] = useState();


    let navigate = useNavigate();
  
    function validateForm() {
        return newPassword===confirmNewPassword;
      }

    const onCurrentPasswordChangeHandler=(e)=>{
        setCurrentPassword(e.target.value);
        console.log(currentPassword);
    }

    const onNewPasswordChangeHandler=(e)=>{
        setNewPassword(e.target.value);
        console.log(e.target.value);
    }

    const onConfirmNewPasswordChangeHandler=(e)=>{
        setConfirmNewPassword(e.target.value);
        console.log(e.target.value);
    }

  const onSubmit = async (e) => {
    e.preventDefault();
     console.log('project data Array:');

  };

  return (
    <>
    
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{border: 'rounded solid 6px',backgroundColor:'#E4F1FF',borderRadius:'10px'}}>
          <h2 className="text-center m-4 fs-3" style={{fontFamily: 'Apple Chancery',fontWeight:'bold'}}>Change Password</h2>

          <form onSubmit={onSubmit} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label ml-0 " style={{fontWeight:'bold'}}>
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter current password"
                name="currentPassword"
                value={currentPassword}
                onChange={(e) => onCurrentPasswordChangeHandler(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Summary" className="form-label ml-0" style={{fontWeight:'bold'}}>
                New Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter new password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => onNewPasswordChangeHandler(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="client_name" className="form-label ml-0" style={{fontWeight:'bold'}}>
                Confirm New Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter new password again"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => onConfirmNewPasswordChangeHandler(e)}
              />
            </div>
            

            <Button type="submit" 
            className="btn " 
            disabled={!validateForm()}
            style={{fontWeight:'bold',borderRadius:'10px',borderRadius:'5px',color:'white',backgroundColor: 'hsl(244, 77%, 14%)'}}>
            
              Change Password
            </Button>
            <Link className="btn btn-outline-danger mx-2" to="/AdminHome">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Settings