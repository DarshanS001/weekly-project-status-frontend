import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import HeaderTest from './HeaderTest'
import SidebarTest from './SidebarTest'


export default function Dashboard() {
  return (
    <div>
        <div style={{display:'flex'}}>
         
         
         <Sidebar/>
      
        
       

        <div style={{height:'80px',width:'1200px',marginLeft:'0px'}}>
        <Header/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
