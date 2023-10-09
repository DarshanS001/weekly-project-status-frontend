import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faClipboard, faComment, faChartBar } from '@fortawesome/free-solid-svg-icons';

import './SidebarTest.css'; // Import the CSS file for styling



 

 

const SidebarTest = () => {

return (

<div className="sidebar">

<ul className="sidebar-menu">

<li>

   

<FontAwesomeIcon icon={faUser} />


<span style={{color:"white" }}>Onboard</span>



 

</li>

<li>

   

<FontAwesomeIcon icon={faClipboard} />

<span>Evaluation</span>

 

</li>

<li>

 

    <FontAwesomeIcon icon={faUser} />

    

<span style={{color:"white"}}>Requirement</span>



 

</li>

 

<li>

 

<FontAwesomeIcon icon={faComment} />

<span>Feedback</span>

</li>

<li>

<FontAwesomeIcon icon={faChartBar} />

<span>Report</span>

</li>

</ul>

</div>

);

};

 

export default SidebarTest;