import React from 'react'
import AllManagers from './AllManagers'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div>
        <Link to={'/admin/managers/'}><Button style={{marginLeft:'30px',backgroundColor:'orange'}}>Managers</Button></Link>
        <Link to={'/admin/management/'}><Button style={{marginLeft:'30px',backgroundColor:'orange'}}>Management</Button></Link>
    </div>
  )
}
