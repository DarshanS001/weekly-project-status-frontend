// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import './AllManagers.css';


// const AllAdmin = () => {
//     const [id, setId] = useState('');
//     const admin = [
//       { name: "sakumar",
//             email: "sakumar@gmail.com",
//             phone: "9898780734",
//             designation: "Project Manager"
//            },
      
//            { name: "sakumar",
//            email: "sakumar@gmail.com",
//            phone: "9898780734",
//            designation: "Project Manager"
//           },
  
//           { name: "sakumar",
//             email: "sakumar@gmail.com",
//             phone: "9898780734",
//             designation: "Project Manager"
//            },
  
//            { name: "sakumar",
//             email: "sakumar@gmail.com",
//             phone: "9898780734",
//             designation: "Project Manager"
//            },
  
//            { name: "sakumar",
//             email: "sakumar@gmail.com",
//             phone: "9898780734",
//             designation: "Project Manager"
//            },
//     ];
//     const fileName = 'AllAdminData';
   
//     return (
//       <div>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <h2 style={{ fontWeight: 'bold', fontFamily: 'Apple Chancery' }}>Admin</h2>
//           <Link to={'/admin/addAdmin/'}>
//             <Button style={{ marginTop: '10px' }}>Add Admin</Button>
//           </Link>
//         </div>
   
//         <div style={{ overflowX: 'auto' }}>
//           <table style={{ marginTop: '10px', marginBottom: '40px', width: '100%', maxWidth: '1200px' }}>
//             <thead>
//               <tr style={{ backgroundColor: 'orange' }}>
//                 <th scope="col">S. No.</th>
//                 <th style={{ textAlign: 'center' }} scope="col">
//                   Name
//                 </th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Phone</th>
//                 <th scope="col">Designation</th>
//                 <th scope="col">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {admin.map((s, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                    <td>{s.name}</td>
//                   <td>{s.email}</td>
//                   <td>{s.phone}</td>
//                   <td>{s.designation}</td>
//                   <td>
//                     <Link to={'/admin/updateAdmin/'}>
//                       <img
//   src="https://img.icons8.com/?size=2x&id=12082&format=png"
//                         alt="editimg"
//                         style={{ height: '25px', width: '25px', marginRight: '10px' }}
//                       />
//                     </Link>
//                     <img
//   src="https://img.icons8.com/?size=2x&id=102350&format=png"
//                       alt="deleteing"
//                       style={{ height: '25px', width: '25px' }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
// }

// export default AllAdmin

import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './AllManagers.css';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import { ExportCSV } from './ExportCSV';
// import AdminHeader from './AdminHeader';
export default function AllAdmin() {
 
  // const [admin,setAdmin] = useState([])
  const [id, setId] = useState("");
  const [adminList, setAdminList] = useState([]);
 
  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"))
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
 
  useEffect(() => {
 
    async function getAdminList() {
      try {
        const adminList = await axios.get(`http://127.0.0.1:8000/api/user/adminlist/`, config);
        console.log("Get all managers list", adminList.data);
        setAdminList(adminList.data);
      } catch (error) {
        console.log("Data fetching Error Occured in Manager List");
      }
    }
 
    getAdminList();
 
  }, []);
  return (
 
    <div >
 
      <div style={{ display: 'flex' }}>
        <h2 style={{ marginLeft: '500px', fontWeight: 'bold', fontFamily: 'Apple Chancery' }}>Admins</h2>
        <Link to={'/admin/addAdmin'}><Button style={{ marginLeft: '300px' }}>Add Admin</Button></Link>
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
            adminList.map((s, index) => (
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
 