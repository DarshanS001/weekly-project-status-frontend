import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import { Link,useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [updateUserData, setUpdateUserData] = useState({
        user_name: "",
        user_email: ""
    });
    const [userDetails, setUserDetails] = useState([]);


    // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"));
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // Code to get User Data from API call
  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await axios.get(
          "http://127.0.0.1:8000/api/user/profile/",
          config
        );
        console.log("Get User Data", userData.data);
        setUserDetails(userData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in User Data");
      }
    }

    getUserData();
  }, []);

  console.log("User Details:-", userDetails);
  console.log("User Details ID:-", userDetails.id);


    useEffect(() => {
        if(id){
            axios.get(`http://localhost:8000/api/user/profileid/${id}/`, config).then(
            res => {
            console.log("Get User Profile by ID",res.data);
        
            setUpdateUserData(res.data);
        });

        }
    },[id]);

console.log("updateUserData",updateUserData);
// console.log(updateManagerData.name);

const getNewUserData = (event) => {
    setUpdateUserData({ ...updateUserData, [event.target.name]: event.target.value });
        console.log(updateUserData);
 }

 async function onHandleUpdate(e){
    e.preventDefault();
  await axios.put(`http://localhost:8000/api/user/profile/${id}/`, updateUserData, config)
 .then(
   res => {
      console.log(updateUserData);
      console.log(res.data);
     }).catch(error => {
   console.error("Error occured in Update User",error);
 })
 alert("User details updated successfully");
 
//  navigate("/adminPage");
}


  return (
    <>
    {console.log("in update")}
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow" style={{border: 'rounded solid 6px',backgroundColor:'#E4F1FF',borderRadius:'10px'}}>
          <h2 className="text-center m-4 fs-3" style={{fontFamily: 'Apple Chancery',fontWeight:'bold'}}>Update User</h2>

          <form>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label" style={{marginLeft:'-390px',fontWeight:'bold'}}>
                 Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter name"
                name="user_name"
                value={updateUserData.user_name}
                onChange={(e)=>getNewUserData(e)}
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
                name="user_email"
                value={updateUserData.user_email}
                onChange={(e)=>getNewUserData(e)}
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
                // value={updateUserData.phone}
                onChange={(e)=>getNewUserData(e)}
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
                // value={updateUserData.designation}
                onChange={(e)=>getNewUserData(e)}
              />
            </div>


            <button onClick={onHandleUpdate} type="submit" className="btn " style={{fontWeight:'bold',borderRadius:'10px',borderRadius:'5px',color:'white',backgroundColor: 'hsl(244, 77%, 14%)'}}>
              Update User
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default UpdateUser