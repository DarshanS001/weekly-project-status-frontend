import React from 'react'
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
//import usernameicon from '../../images/usernameicon.png';

const ManagerProfile = () => {
  return (


    // <div style={{backgroundColor:'black',height:'310px',paddingTop:'5px',textAlign:'center'}}>
    // <Container>
    //   <Row className="justify-content-md-center">
    //     <Col xs={3} style={{backgroundColor:'red',height:'300px'}}>1 of 3</Col>
    //     <Col xs={4} style={{backgroundColor:'#F8E8EE'}}>2 of 3 (wider)</Col>
        
    //   </Row>
      
    // </Container>
    // </div>

    // <Container>
    //   <Row className="justify-content-md-center " style={{backgroundColor:'black'}}>
    //     <Col xs={3} style={{backgroundColor:'orange',height:'450px',marginLeft:'20px'}}>
    //       {/* <img src={profileBackground} alt='backgroundimg' style={{height:'300px',width:'390px',marginLeft:'0px'}}></img> */}
    //       <h1 style={{color:'white'}}>Aastha Chouksey</h1>
    //     </Col>
    //     <Col xs={4} style={{backgroundColor:'#F8E8EE',height:'450px'}}>Variable width content</Col>
        
    //   </Row>
      
    // </Container>

    


    <div>
       


        <Container>
      <Row>
        <Col>


        <div style={{display:'flex',marginLeft:'200px',borderRadius:'20px',width:'750px',boxShadow:'10px 10px 10px 10px #888888'}}>
            <div style={{margin:'10px',borderRadius:'15px',backgroundColor:'orange',height:'450px',width:'300px',boxShadow:'3px  #888888'}}>
              <img src={mbggg} alt='fffff' style={{height:'145px',width:'155px',marginTop:'100px'}}></img>
              <div>
                <h3 style={{color:'white',marginTop:'20px',fontFamily:'Apple Chancery',fontWeight:'bold'}}>Manager Name</h3>
                <h5 style={{color:'white',marginTop:'0px',fontFamily:'Apple Chancery',fontWeight:'bold'}}>Designation</h5>
              </div>
            </div>

            <div style={{backgroundColor:'white',borderRadius:'15px',height:'450px',width:'400px',margin:'10px'}}>
                  {/* <h3 style={{marginTop:'40px',fontFamily:'Apple Chancery',fontWeight:'bold',textDecoration:'underline gray',textDecorationThickness:'2.5px',textUnderlineOffset:'15px'}}>Information</h3> */}
                  <h3 style={{marginTop:'40px',fontFamily:'Apple Chancery',fontWeight:'bold'}}>Information</h3>
                  <div style={{height:'3px',width:'380px',backgroundColor:'gray'}}></div>
                  <div style={{marginLeft:'-270px',marginTop:'35px'}}>
                    <p style={{fontSize:'50 rem'}}><img src={emailicon} alt='email icon' style={{height:'15px',width:'25px',marginRight:'6px'}}/>   Email : </p>
                    <p><img src={contacticon} alt='contact icon' style={{height:'25px',width:'25px',marginRight:'6px'}}/> Phone : </p>
                    <p style={{marginLeft:'20px'}}><img src={usernameicon} alt='contact icon' style={{height:'25px',width:'25px',marginRight:'6px'}}/> Username : </p>
                    <p ><img src={irmicon} alt='contact icon' style={{marginLeft:'90px',height:'40px',width:'30px',marginRight:'6px'}}/> Reporting Manager: </p>
                    <div style={{marginLeft:'280px',height:'3px',width:'380px',backgroundColor:'gray',marginTop:'25px'}}></div>
                    <Link to={'/manager/allProjectsOfParticularManager/'} ><img src={projectsButton} alt='project button' style={{marginLeft:'80px',height:'90px',width:'160px',marginRight:'6px',marginTop:'20px'}} /></Link>
                  </div>
            </div>
        </div>
        
        </Col>
      </Row>
    </Container>
   

    </div>
  )
}

export default ManagerProfile