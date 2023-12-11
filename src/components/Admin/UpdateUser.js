import { faL } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const UpdateUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [updateUserData, setUpdateUserData] = useState({ 
    user_name: "", 
    user_email: "",
    user_type: "",
    is_active: ""
  });
  const [userDetails, setUserDetails] = useState([]);

  const token = localStorage.getItem("user-token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

 
  useEffect(() => {
    async function getUserData() {
      try {
      const userData = await axios.get("http://127.0.0.1:8000/api/user/profile/", config);
        setUserDetails(userData.data);
      } catch (error) {
        console.log("Data fetching Error Occurred in User Data");
      }
    }
    getUserData();
  }, []);
  console.log("userDetails:", userDetails);
 
  useEffect(() => {
    if (id) {
          axios.get(`http://localhost:8000/api/user/profileid/${id}/`, config).then(res => {
        setUpdateUserData(res.data);
      });
    }
  }, [id]);
 
  const getNewUserData = (event) => {
setUpdateUserData({ ...updateUserData, [event.target.name]: event.target.value });
  };
 
  async function onHandleUpdate(e) {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/user/profile/${id}/`, updateUserData, config)
      .then(res => {
        console.log(updateUserData);
        console.log(res.data);
        alert("User details updated successfully");
        navigate(-1);
      }).catch(error => {
        console.error("Error occurred in Update User", error);
        const showToastUpdateUserErrorMessage = () => {
          toast.error("Error occurred in Update User", {
            position: toast.POSITION.TOP_RIGHT,
          });
        };
        showToastUpdateUserErrorMessage();
      });
    
  }
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{ border: 'rounded solid 6px', backgroundColor: '#E4F1FF', borderRadius: '10px' }}>
            <h2 className="text-center m-4 fs-3" style={{ fontFamily: 'Apple Chancery', fontWeight: 'bold' }}>Update User</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label" style={{ fontWeight: 'bold' }}>Name</label>
                <input type={"text"} className="form-control" placeholder="Enter name" name="user_name" value={updateUserData.user_name} onChange={(e) => getNewUserData(e)} />
              </div>

              <div className="mb-3">
                <label htmlFor="Address" className="form-label" style={{ fontWeight: 'bold' }}>Email</label>
                <input type={"text"} className="form-control" placeholder="Enter email" name="user_email" value={updateUserData.user_email} onChange={(e) => getNewUserData(e)} />
              </div>

              <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{ fontWeight: 'bold' }}>Phone Number</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter phone no."
                name="phone"
                // value={updateUserData.phone}
                value="9892233000"
                onChange={(e)=>getNewUserData(e)}
              />
            </div>
 
            <div className="mb-3">
            <label htmlFor="Name" className="form-label" style={{ fontWeight: 'bold' }}>Designation</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter designation"
                name="designation"
                // value={updateUserData.designation}
                onChange={(e)=>getNewUserData(e)}
              />
            </div>

            <div className="mb-3">
            <label htmlFor="Name" className="mb-2" style={{ fontWeight: 'bold' }}>User Type</label>
                  <select
                  className="form-control"
                   name="user_type"
                   value={updateUserData.user_type}
                   onChange={(e)=>getNewUserData(e)}
                   >
                    <option value="Admin">Admin</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Management">Management</option>
                  </select>
            </div>


            <div className="mb-3">
            <label htmlFor="Name" className="mb-2" style={{ fontWeight: 'bold' }}>Is Active</label>
                  <select
                  className="form-control"
                   name="is_active"
                   value={updateUserData.is_active}
                   onChange={(e)=>getNewUserData(e)}
                   >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
            </div>

            {/* <div className="mb-3">
            <label htmlFor="Name"  style={{ fontWeight: 'bold', marginRight:"10%" }}>Is Active</label>
              <input
                type={"checkbox"}
                name="is_active"
                value={updateUserData.is_active}
                onChange={(e)=>getNewUserData(e)}
              />
            </div> */}

              {/* Add similar responsive form inputs for Phone No. and Designation */}
              <button onClick={onHandleUpdate} type="submit" className="btn mt-3" style={{ fontWeight: 'bold', borderRadius: '10px', color: 'white', backgroundColor: 'hsl(244, 77%, 14%)' }}>Update User</button>
              <Link className="btn btn-outline-danger mx-2 mt-3" onClick={() => { navigate(-1) }}>Cancel</Link>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default UpdateUser;