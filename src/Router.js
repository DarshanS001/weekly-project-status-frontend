import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/manager/Home';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import AddProject from './components/manager/AddProject';
import ProjectDetails from './components/manager/ProjectDetails';
import WeeklyStatus from './components/manager/WeeklyStatus';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddManager from './components/Admin/AddManager';
import UpdateManager from './components/Admin/UpdateManager';
import AllManagers from './components/Admin/AllManagers';
import AllManagement from './components/Admin/AllManagement';
import ManagerProfile from './components/manager/ManagerProfile';
import AllProjectOfParticularManager from './components/manager/AllProjectOfParticularManager';
import Settings from './components/manager/Settings';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/Register' element={<RegisterPage/>}/>
            
            <Route path='/AdminPage' element={<AdminDashboard/>}/>
            <Route path='/admin/managers/' element={<AllManagers/>}/>
            <Route path='/admin/managemnet/' element={<AllManagement/>}/>
            <Route path='/admin/addProjectManager/' element={<AddManager/>}/>
            <Route path='/admin/updateManager/' element={<UpdateManager/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/manager/home' element={<Home/>}/>
            <Route path='/manager/addProjectPage' element={<AddProject/>}/>
            <Route path='/manager/managerProfile' element={<ManagerProfile/>}/>
            <Route path='/manager/managerProfile/allProjectsOfParticularManager/' element={<AllProjectOfParticularManager/>}/>
            <Route path='/manager/settings' element={<Settings/>}/>
            <Route path='/manager/projectDetails/:id' element={<ProjectDetails/>}/>
            <Route path='/manager/projectWeeklyStatus' element={<WeeklyStatus/>}/>
        </Routes>
    </div>
  )
}

export default Router