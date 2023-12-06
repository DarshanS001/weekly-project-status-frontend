import React from 'react'
import './User.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import admin3 from '../../images/admin3.jpg';
import management3 from '../../images/management3.jpg';
import mbggg from '../../images/mbggg.png';
import manager1 from '../../images/manager1.jpg';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    
    <Container>

      <Row style={{marginBottom:'2.5%'}}>
        <div>
          <h1 style={{fontWeight:'bold'}}>Admin Dashboard</h1>
          <div className='admin-line'></div>
        </div>
      </Row>
    <Row>

    <Col>

<Card className='card' >
<Card.Img variant="top" src={admin3} className='card-img' />
<Card.Body className='card-body'>
  <Card.Title>Admin</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Link to={'/admin/allAdmins/'}><Button className='button'>View Details</Button></Link>
</Card.Body>
</Card>

</Col>


      <Col>

      <Card className='card' >
      <Card.Img variant="top" src={manager1} className='card-img' />
      <Card.Body className='card-body'>
        <Card.Title>Managers</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={'/admin/managers/'}><Button className='button'>View Details</Button></Link>
      </Card.Body>
    </Card>

      
      </Col>

      


      <Col>

      <Card className='card'>
      <Card.Img variant="top" src={management3} className='card-img'/>
      <Card.Body className='card-body'>
        <Card.Title>Management</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={'/admin/management/'}><Button className='button'>View Details</Button></Link>
      </Card.Body>
    </Card>
      
      </Col>


      
    </Row>
  </Container>

  )
}

export default User