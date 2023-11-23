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
import AddWeekDataPage1 from './components/manager/AddWeekData/AddWeekDataPage1';
import AddWeekDataPage2 from './components/manager/AddWeekData/AddWeekDataPage2';
import AddWeekDataPage3 from './components/manager/AddWeekData/AddWeekDataPage3';
import Settings from './components/manager/Settings';
import AllProjectWeeklyReports from './components/manager/ProjectWeeklyReportOverview';
import ProjectWeeklyReportOverview from './components/manager/ProjectWeeklyReportOverview';
import WeeklyReports from './components/manager/WeeklyReports';
import AdminProfile from './components/Admin/AdminProfile';
import ManagementProfile from './components/management/ManagementProfile';
import ManagementList from './components/Admin/ManagementList';
import addUser from './components/Admin/addUser';
import ManagementProjectList from './components/management/ManagementProjectList';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/Register' element={<RegisterPage/>}/>
            
            {/* Admin's routing */}
            <Route path='/AdminPage' element={<AdminDashboard/>}/>
            <Route path='/admin/managers/' element={<AllManagers/>}/>
            <Route path='/admin/managemnet/' element={<AllManagement/>}/>
            <Route path='/admin/addProjectManager/' element={<AddManager/>}/>
            <Route path='/admin/updateManager/' element={<UpdateManager/>}/>
            <Route path='/admin/adminProfile/' element={<AdminProfile/>}/>
            <Route path='/admin/user/managementlist/' element={<ManagementList/>}/>
            <Route path='/admin/addUser/' element={<addUser/>}/>

            <Route path='/LoginPage' element={<LoginPage/>}/>
            {/* Manager's routing */}
            <Route path='/manager/home' element={<Home/>}/>
            <Route path='/manager/addProjectPage' element={<AddProject/>}/>
            <Route path='/manager/managerProfile' element={<ManagerProfile/>}/>
            <Route path='/manager/managerProfile/allProjectsOfParticularManager/' element={<AllProjectOfParticularManager/>}/>
            <Route path='/manager/allProjectWeeklyReports/' element={<WeeklyReports/>}/>
            <Route path='/manager/projectWeeklyReportOverview/:id' element={<ProjectWeeklyReportOverview/>}/>
            <Route path='/manager/settings' element={<Settings/>}/>
            <Route path='/manager/projectDetails/:id' element={<ProjectDetails/>}/>
            <Route path='/manager/projectWeeklyStatus' element={<WeeklyStatus/>}/>
            <Route path='/manager/addWeekDataPage1' element={<AddWeekDataPage1/>}/>
            <Route path='/manager/addWeekDataPage2' element={<AddWeekDataPage2/>}/>
            <Route path='/manager/addWeekDataPage3' element={<AddWeekDataPage3/>}/>
            
            {/* Management routing */}
            <Route path='/management/home' element={<ManagementProjectList/>}/>
            <Route path='/management/managementProfile' element={<ManagementProfile/>}/>
        </Routes>
    </div>
  )
}

export default Router