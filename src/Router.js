import React from 'react'
import {Routes , Route } from "react-router-dom";
import Home from './components/Admin/Home';
import LoginPage from './components/Login/LoginPage';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/AdminHome' element={<Home/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}

export default Router