import React from 'react'
import AllManagers from './AllManagers'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div>
      <Link to={'/admin/managers/'}><Button style={{marginLeft:'30px',backgroundColor:'orange'}}>Managers</Button></Link>
        <Link to={'/admin/management/'}><Button style={{marginLeft:'30px',backgroundColor:'orange'}}>Management</Button></Link>
        <Link to={'/admin/adminList/'}><Button style={{marginLeft:'30px',backgroundColor:'orange'}}>Admins</Button></Link>
      {/* <Button style={{ backgroundColor: "#AABBCC", marginBottom: '3px' }} size="lg" className="ms-2">
        <Link to={`/admin/adminlist/`} style={{ textDecoration: 'None', color: 'white' }}>Admin List</Link>
      </Button>
      <Button style={{ backgroundColor: "#AABBCC", marginBottom: '3px' }} size="lg" className="ms-2">
        <Link to={`/admin/managers/`} style={{ textDecoration: 'None', color: 'white' }}>Manager List</Link>
      </Button>
      <Button style={{ backgroundColor: "#AABBCC", marginBottom: '3px' }} size="lg" className="ms-2">
        <Link to={`/admin/managemnet/`} style={{ textDecoration: 'None', color: 'white' }}>Management List</Link>
      </Button> */}
    </div>
  )
}
