import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/Admin/Home';
import LoginPage from './components/Login/LoginPage';
import AddProject from './components/manager/AddProject';
import ProjectDetails from './components/manager/ProjectDetails';
import WeeklyStatus from './components/manager/WeeklyStatus';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddManager from './components/Admin/AddManager';
import UpdateManager from './components/Admin/UpdateManager';
import AllManagers from './components/Admin/AllManagers';
import AllManagement from './components/Admin/AllManagement';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/AdminHome' element={<Home/>}/>
            <Route path='/AdminPage' element={<AdminDashboard/>}/>
            <Route path='/admin/managers/' element={<AllManagers/>}/>
            <Route path='/admin/managemnet/' element={<AllManagement/>}/>
            <Route path='/admin/addProjectManager/' element={<AddManager/>}/>
            <Route path='/admin/updateManager/' element={<UpdateManager/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/manager/addProjectPage' element={<AddProject/>}/>
            <Route path='/manager/projectDetails/:id' element={<ProjectDetails/>}/>
            <Route path='/manager/projectWeeklyStatus' element={<WeeklyStatus/>}/>
        </Routes>
    </div>
  )
}

export default Router