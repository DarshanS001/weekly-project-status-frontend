import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../Admin/Home'
import Router from '../../Router'


export default function Dashboard() {
  return (
    <div>
        <Header/>
        <br/>
        <Router/>
        <Footer/>
    </div>
  )
}
