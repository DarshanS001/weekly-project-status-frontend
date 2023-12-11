import React from 'react';
import {Link} from "react-router-dom";
import  "./Footer.css";
import { Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='footer'>
    <div className={`row justify-content-center`} >

            <div className="col-6" style={{marginTop:'0 px'}}>
              <p>Copyright 2023-2024 Weekly Status App Pvt.Ltd. All right reserved.</p>
            </div>
          </div>
    </div>
  )
}



