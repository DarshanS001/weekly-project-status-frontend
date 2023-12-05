

import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './AllManagers.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import { ExportCSV } from './ExportCSV';
// import AdminHeader from './AdminHeader';
export default function AllManagers() {
 
  // const [admin,setAdmin] = useState([])
  const [id, setId] = useState("");
  const [managerList, setManagerList] = useState([]);
 
  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 
  useEffect(() => {
 
    async function getManagerList() {
      try {
        const managerList = await axios.get(`http://127.0.0.1:8000/api/user/projectmanagerlist/`, config);
        console.log("Get all managers list", managerList.data);
        setManagerList(managerList.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Manager List");
      }
    }
 
    getManagerList();
 
  }, []);
  return (
 
    <div >
 
      <div style={{ display: 'flex' }}>
        <h2 style={{ marginLeft: '500px', fontWeight: 'bold', fontFamily: 'Apple Chancery' }}>Project Managers</h2>
        <Link to={'/admin/addProjectManager/'}><Button style={{ marginLeft: '300px' }}>Add Manager</Button></Link>
      </div>
      <Container className='mt-5'>
      <Table striped bordered hover>
        <thead>
          <tr style={{ backgroundColor: 'hsl(244, 77%, 14%)' }}>
            <th style={{ outline: '', color: 'white' }} scope="col">S. No.</th>
            <th style={{ outline: '', textAlign: 'center', color: 'white' }} scope="col">Name</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Email</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Phone</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Designation</th>
            <th style={{ outline: '', color: 'white' }} scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            managerList.map((s, index) => (
              <tr style={{ outline: '' }}>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{s.user_name}</td>
                <td>{s.user_email}</td>
                <td>{s.phone}</td>
                <td>{s.user_type}</td>
                <td>
 
                  <Link to={'/admin/updateManager/'}><img src='https://img.icons8.com/?size=2x&id=12082&format=png' alt='editimg' style={{ height: '25px', width: '25px', marginLeft: '30px', marginRight: '20px' }} /></Link>
                  
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}
 

