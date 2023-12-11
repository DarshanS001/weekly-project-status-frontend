import React from 'react'
import './UserProfile.css'
import mbggg from '../../images/mbggg.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailicon from '../../images/emailicon.png';
import contacticon from '../../images/contacticon.png';
import usernameicon from '../../images/usernameicon.png';
import irmicon from '../../images/irmicon.png';
import projectsButton from '../../images/projectsButton.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import usernameicon from '../../images/usernameicon.png';

const UserProfile = () => {

  // To get Id....
  const { id } = useParams();
  console.log("id:",id);
  
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
           `http://127.0.0.1:8000/api/user/profileid/${id}/`,
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

    return(
      <Container>
      <Row className="justify-content-md-center mainContainer mx-auto"  >
          <Col lg="4" style={{marginBottom:'20px',marginLeft:'-20%'}}>
  
          <div className='profile-background'>
                <img src={mbggg} alt='profile-imgg' className='profile-img'></img>
                <div>
                  <h3 className='profile-imgInfo'>{userDetails.user_name}</h3>
                  <h5 className='profile-imgInfo' style={{marginTop:'0px'}}>{userDetails.user_type}</h5>
                </div>
              </div>
            
          </Col>
  
  
          <Col md={5} style={{marginBottom:'20px'}} className='justify-content-end'>
             
          <div className='info-container'>
                    
                    <h3 className='info-heading'>Information</h3>
                    <div className='underline'></div>
                    <div className='info-content'>
                      <p ><img src={emailicon} alt='email icon' style={{ height: '2.0em'}}  className='icons' /> Email : {userDetails.user_email}</p>
                      <p><img src={contacticon} alt='contact icon' className='icons' /> Phone : 9756094522</p>
                      <p ><img src={usernameicon} alt='contact icon' className='icons' /> Username : {userDetails.user_name}</p>
                      <p ><img src={irmicon} alt='contact icon' className='icons' /> Reports To: </p>
                      
                      <div className='underline'></div>
                      
                    </div>
              </div>
  
          </Col>
  
  
  
          
        </Row>
    </Container>
   )
  
}

export default UserProfile