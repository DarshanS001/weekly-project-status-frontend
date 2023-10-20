import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/Admin/Home';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import AddProject from './components/manager/AddProject';
import ProjectDetails from './components/manager/ProjectDetails';
import WeeklyStatus from './components/manager/WeeklyStatus';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/Register' element={<RegisterPage/>}/>
            <Route path='/AdminHome' element={<Home/>}/>
            <Route path='/manager/addProjectPage' element={<AddProject/>}/>
            <Route path='/manager/projectDetails/:id' element={<ProjectDetails/>}/>
            <Route path='/manager/projectWeeklyStatus' element={<WeeklyStatus/>}/>
        </Routes>
    </div>
  )
}

export default Router