import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/manager/Home';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import ForgotPasswordPage from './components/Login/ForgotPasswordPage';
import ResetPassword from './components/Login/ResetPassword';
import AddProject from './components/manager/AddProject';
import ProjectDetails from './components/manager/ProjectDetails';
import WeeklyStatus from './components/manager/WeeklyStatus';
import AllManagers from './components/Admin/AllManagers';
import AllManagement from './components/Admin/AllManagement';
import AllProjectOfParticularManager from './components/manager/AllProjectOfParticularManager';
import AddWeekDataPage1 from './components/manager/AddWeekData/AddWeekDataPage1';
import AddWeekDataPage2 from './components/manager/AddWeekData/AddWeekDataPage2';
import AddWeekDataPage3 from './components/manager/AddWeekData/AddWeekDataPage3';
import AddWeekDataPage4 from './components/manager/AddWeekData/AddWeekDataPage4';
import Settings from './components/manager/Settings';
import AllProjectWeeklyReports from './components/manager/ProjectWeeklyReportOverview';
import ProjectWeeklyReportOverview from './components/manager/ProjectWeeklyReportOverview';
import WeeklyReports from './components/manager/WeeklyReports';
import AddManagement from './components/Admin/AddManagement';
import WelcomeApplication from './components/dashboard/WelcomeApplication';
import User from './components/Admin/User';
import AllAdmin from './components/Admin/AllAdmin';
import AddAdmin from './components/Admin/AddAdmin';
import UpdateUser from './components/Admin/UpdateUser';
import ManagerProfile from './components/manager/ManagerProfile';
import AdminProfile from './components/Admin/AdminProfile';
import ManagementProfile from './components/Management/ManagementProfile';
import UserProfile from './components/Admin/UserProfile';
import PageNotFound from './components/PageNotFound';

import { useState, useEffect } from "react";
import axios from "axios";

const Router = () => {
  const [userDetails, setUserDetails] = useState([]);

  // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"));
  const token = localStorage.getItem("user-token");

  return (
    <div>
        
          {
            !token 
            ?
            <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/forgotPasswordPage' element={<ForgotPasswordPage/>}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>
            <Route path='/resetpassword/:uid/:token/' element={<ResetPassword/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            :
            <Routes>
               <Route path='/Register' element={<RegisterPage/>}/>
            
            {/*---------------------- Admin's Routing-----------------------------*/}

            
            <Route path='/WeeklyStatusReport' element={<WelcomeApplication/>}/>
            <Route path='/forgotPasswordPage' element={<ForgotPasswordPage/>}/>
            
            <Route path='/admin/updateUser/:id' element={<UpdateUser/>}/>

            
            <Route path='/AdminPage' element={<User/>}/>
            <Route path='/admin/allAdmins/' element={<AllAdmin/>}/>
            <Route path='/admin/managers/' element={<AllManagers/>}/>
            <Route path='/admin/management/' element={<AllManagement/>}/>
            <Route path='/admin/addAdmin' element={<AddAdmin/>}/>
            <Route path='/admin/management/addManagement' element={<AddManagement/>}/>
            <Route path='/admin/profile' element={<AdminProfile/>}/>
            <Route path='/admin/UserProfile/:id' element={<UserProfile/>}/>

            
            {/*---------------------- Managers's Routing-----------------------------*/}
            <Route path='/manager/home' element={<Home/>}/>
            <Route path='/manager/addProjectPage' element={<AddProject/>}/>
            <Route path='/manager/managerProfile' element={<ManagerProfile/>}/>
            <Route path='/manager/managerProfile/allProjectsOfParticularManager/:id' element={<AllProjectOfParticularManager/>}/>
            <Route path='/manager/allProjectWeeklyReports/' element={<WeeklyReports/>}/>
            <Route path='/manager/projectWeeklyReportOverview/:id' element={<ProjectWeeklyReportOverview/>}/>
            <Route path='/manager/settings' element={<Settings/>}/>
            
            <Route path='/manager/projectDetails/:id' element={<ProjectDetails/>}/>
            <Route path='/manager/projectWeeklyStatus/:id' element={<WeeklyStatus/>}/>
            <Route path='/manager/addWeekDataPage1' element={<AddWeekDataPage1/>}/>
            <Route path='/manager/addWeekDataPage2' element={<AddWeekDataPage2/>}/>
            <Route path='/manager/addWeekDataPage3' element={<AddWeekDataPage3/>}/>
            <Route path='/manager/addWeekDataPage4' element={<AddWeekDataPage4/>}/>

            {/* --------------------------Management---------------------------------- */}
            <Route path='/management/managementProfile' element={<ManagementProfile/>}/>

            <Route path="*" element={<PageNotFound/>}/>
          </Routes>

          }
           
           
    </div>
  )
}

export default Router