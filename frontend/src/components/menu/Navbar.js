// If the user is admin show Admin_Menu.
// If the user is staff show Staff_Menu.
// If the user is student show Student_Menu.

import React from 'react'
import Admin_Menu from './AdminMenu.js';
import Staff_Menu from './StaffMenu.js';
import Student_Menu from './StudenMenu.js';
import { useState, useEffect } from 'react';

function Navbar() {
  
  // show user menu according to the type of user
  const URL_NAME = window.location.pathname;

  const [menu, setMenu] = useState(null);

  useEffect(()=>{
    switch(true){
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard' || URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/' :
        setMenu(<Admin_Menu />);
        break;
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard' || URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/':
        setMenu(<Staff_Menu />);
        break;
      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard' || URL_NAME.toLowerCase() === '/dashboard/student_dashboard/':
        setMenu(<Student_Menu />);
        break;
    }
  },[]);
  
  return (
    <React.Fragment>
    <div className=''>{menu}</div>
    </React.Fragment>
  )
}

export default Navbar