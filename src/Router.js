import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/Admin/Home';
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
import AddWeekDataPage1 from './components/manager/AddWeekData/AddWeekDataPage1';
import AddWeekDataPage2 from './components/manager/AddWeekData/AddWeekDataPage2';
import AddWeekDataPage3 from './components/manager/AddWeekData/AddWeekDataPage3';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/Register' element={<RegisterPage/>}/>
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
            <Route path='/manager/addWeekDataPage1' element={<AddWeekDataPage1/>}/>
            <Route path='/manager/addWeekDataPage2' element={<AddWeekDataPage2/>}/>
            <Route path='/manager/addWeekDataPage3' element={<AddWeekDataPage3/>}/>
        </Routes>
    </div>
  )
}

export default Router