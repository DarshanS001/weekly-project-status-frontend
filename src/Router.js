import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/Admin/Home';
import LoginPage from './components/Login/LoginPage';
import AddProject from './components/manager/AddProject';
import AddProjectTrial from './components/manager/AddProjectTrial';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/AdminHome' element={<Home/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/manager/addProjectPage' element={<AddProjectTrial/>}/>
        </Routes>
    </div>
  )
}

export default Router