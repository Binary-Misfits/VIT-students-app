import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

function Support() {
  const URL_NAME = window.location.pathname;
  const [back, setBack] = useState(null);

  useEffect(()=>{
    switch(true){

      // Login-Support


      case URL_NAME.toLowerCase() === '/support':
        setBack('/')
        break;

      // Admin


      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/attendance':
        setBack('/dashboard/admin_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/review':
      
          setBack('/dashboard/admin_dashboard');
          break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/special_request':
          
          setBack('/dashboard/admin_dashboard');
          break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/notice':
        
        setBack('/dashboard/admin_dashboard');
        break; 
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/complaint':
       
        setBack('/dashboard/admin_dashboard');
        break;      
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/support':
       
        setBack('/dashboard/admin_dashboard');
        break;  


      // STAFF


      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/attendance':
       
        setBack('/dashboard/staff_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/complaint':
        ;
        setBack('/dashboard/staff_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/notice':
      
        setBack('/dashboard/staff_dashboard');
        break;  
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/support':
       
        setBack('/dashboard/staff_dashboard');
        break; 

      // Studnet


      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/attendance':
       
        setBack('/dashboard/student_dashboard');
        break;

      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/complaint':
     
        
        setBack('/dashboard/student_dashboard');
        break;

      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/notice':
        
        setBack('/dashboard/student_dashboard');
        break;  
      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/support':
        
        setBack('/dashboard/student_dashboard');
        break; 
    }
  },[]);


  return (
    <React.Fragment>
    <div className='flex flex-col justify-center items-center md:h-[88vh] h-[50vh]'>
        <div className='border-2 border-gray-700 p-10 rounded-full flex flex-col justify-center'>
            <label label className='text-[#F9C041] italic'>Sorry for the inconvenience caused, please write an email to us describing your issue.</label>
            <div>
                <label className='text-[#F9C041] italic mr-2'>Email:</label>
                <label className='text-gray-700 italic'>enigma@support.com</label>
            </div>
        </div>
        <Link to={back}>
          <div className='  mt-10 md:mb-6 cursor-pointer'>
            <div className='bg-[#F9C041]  py-2 px-8 rounded-full text-lg text-white border-2 border-white hover:text-[#F9C041] hover:bg-white hover:border-2 hover:border-[#F9C041]'>
              Back
            </div>
          </div>
        </Link>
    </div>
    </React.Fragment>
  )
}

export default Support