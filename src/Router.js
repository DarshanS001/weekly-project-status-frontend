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

import AllManagers from './components/Admin/AllManagers';
import AllManagement from './components/Admin/AllManagement';
import ManagerProfile from './components/manager/ManagerProfile';
import AllProjectOfParticularManager from './components/manager/AllProjectOfParticularManager';
import AddWeekDataPage1 from './components/manager/AddWeekData/AddWeekDataPage1';
import AddWeekDataPage2 from './components/manager/AddWeekData/AddWeekDataPage2';
import AddWeekDataPage3 from './components/manager/AddWeekData/AddWeekDataPage3';
import Settings from './components/manager/Settings';
import AllProjectWeeklyReports from './components/manager/ProjectWeeklyReportOverview';
import ProjectWeeklyReportOverview from './components/manager/ProjectWeeklyReportOverview';
import WeeklyReports from './components/manager/WeeklyReports';
import AddManagement from './components/Admin/AddManagement';

import User from './components/Admin/User';
import AllAdmin from './components/Admin/AllAdmin';
import AddAdmin from './components/Admin/AddAdmin';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/Register' element={<RegisterPage/>}/>
            
            <Route path='/AdminPage' element={<User/>}/>
            {/* <Route path='/admin/users/' element={<User/>}/> */}
            <Route path='/admin/allAdmins/' element={<AllAdmin/>}/>
            <Route path='/admin/managers/' element={<AllManagers/>}/>
            <Route path='/admin/management/' element={<AllManagement/>}/>
            <Route path='/admin/addProjectManager/' element={<AddManager/>}/>
            <Route path='/admin/addAdmin' element={<AddAdmin/>}/>
            <Route path='/admin/management/addManagement' element={<AddManagement/>}/>


            <Route path='/LoginPage' element={<LoginPage/>}/>
            
            <Route path='/manager/home' element={<Home/>}/>

           
            <Route path='/manager/addProjectPage' element={<AddProject/>}/>
            <Route path='/manager/managerProfile' element={<ManagerProfile/>}/>
            <Route path='/manager/managerProfile/allProjectsOfParticularManager/' element={<AllProjectOfParticularManager/>}/>
            <Route path='/manager/allProjectWeeklyReports/' element={<WeeklyReports/>}/>
            <Route path='/manager/projectWeeklyReportOverview/' element={<ProjectWeeklyReportOverview/>}/>
            <Route path='/manager/settings' element={<Settings/>}/>
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