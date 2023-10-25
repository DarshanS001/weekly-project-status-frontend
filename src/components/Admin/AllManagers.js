import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link} from "react-router-dom";
import './AllManagers.css';
import { Button } from 'react-bootstrap';
// import { ExportCSV } from './ExportCSV';
// import AdminHeader from './AdminHeader';
export default function AllManagers() {
    
    // const [manager,setManager] = useState([])
    const[id,setId] = useState("");

    const manager = [
        { name: "sakumar",
          email: "sakumar@gmail.com",
          phone: "9898780734",
          designation: "Project Manager"
         },
    
         { name: "sakumar",
         email: "sakumar@gmail.com",
         phone: "9898780734",
         designation: "Project Manager"
        },

        { name: "sakumar",
          email: "sakumar@gmail.com",
          phone: "9898780734",
          designation: "Project Manager"
         },

         { name: "sakumar",
          email: "sakumar@gmail.com",
          phone: "9898780734",
          designation: "Project Manager"
         },

         { name: "sakumar",
          email: "sakumar@gmail.com",
          phone: "9898780734",
          designation: "Project Manager"
         },
      ];
    const fileName = "AllManagerData";
    
//      useEffect(() => {
//       loadManager();
//        console.log("Hello");
//      },[]);
     
//      const loadManager=async()=>{
//         const result= await axios.get("http://localhost:8000/api/")
//         setManager(result.data);
//      }
  
//    const deleteManager=async()=>{

//     alert("Are you sure you want to remove this manager");
//     await axios.delete("http://localhost:8000/api/manager/"+id+"/delete/");
    
//     loadManager();
// }
  return (
  <div >

 
     <div style={{display:'flex'}}>
     <h2 style={{marginLeft:'500px', fontWeight:'bold', fontFamily:'Apple Chancery'}}>Project Managers</h2>
     <Link to={'/admin/addProjectManager/'}><Button style={{marginLeft:'300px'}}>Add Manager</Button></Link>

     </div>
     

        <div >
        <table style={{marginTop: '10px',marginBottom: '40px',marginLeft:'120px',width: '1000px',height: '700px'}}>
  <thead>
    <tr style={{backgroundColor: 'orange'}}>
      <th style={{outline: ''}} scope="col">S. No.</th>
      <th style={{outline: '',textAlign:'center'}} scope="col">Name</th>
      <th style={{outline: ''}} scope="col">Email</th>
      <th style={{outline: ''}} scope="col">Phone</th>
      <th style={{outline: ''}} scope="col">Designation</th>
      <th scope="col">Actions</th>   
    </tr>
  </thead>

  <tbody>  
    {
        manager.map((s,index)=>(
            <tr style={{outline: ''}}>
            <th scope="row" key={index}>{index+1}</th>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.phone}</td>
            <td>{s.designation}</td>
            <td>
              
             <Link to={'/admin/updateManager/'}><img src='https://img.icons8.com/?size=2x&id=12082&format=png' alt='editimg' style={{height:'25px',width:'25px',marginLeft:'30px',marginRight:'20px'}}/></Link>
             {/* <button  onMouseOver={()=>setId(s.id)} onClick={() => deleteManager()}><img src='https://img.icons8.com/?size=2x&id=102350&format=png' alt='deleteimg' style={{height:'25px',width:'25px'}}/></button> */}
             <img src='https://img.icons8.com/?size=2x&id=102350&format=png' alt='deleteimg' style={{height:'25px',width:'25px'}}/>
            </td>
       </tr>
        ))}
 </tbody> </table> </div>

 {/* <div>
   
 <ExportCSV csvData={student} fileName={fileName} />

 </div> */}
     
    </div>
  )
}


