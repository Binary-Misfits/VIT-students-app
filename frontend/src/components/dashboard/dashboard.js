import React from 'react'
import Yellow from './yellow'
import user_img from '../dashboard/img/user_img.svg'
import { useState, useEffect } from 'react';

import Table from '../table/attendance'
import Complaint from '../table/complaint'
import Notice from '../table/notice'
import Support from '../table/support'
import { Link } from "react-router-dom"
import {data} from "../login/login_card"
import {useNavigate} from 'react-router-dom'




function Dashboard() {

  const navigate = useNavigate();


  const URL_NAME = window.location.pathname;
  const [attendance, setAttendance] = useState(null);
  const [heading, setHeading] = useState(null);
  const [complaint, setComplaint] = useState(null);
  const [notice, setNotice] = useState(null);
  const [support, setSupport] = useState(null);
  const [usertype, setUsertype] = useState(null);
  const [back, setBack] = useState(null);
  const [supportstatus, setSupportstatus] = useState(null);

  const [userid, setUserid] = useState("XXXX");
  const [name, setName] = useState("XXX");
  const [gender, setGender] = useState("XXX");
  const [dob, setDob] = useState("XXX");
  const [des, setDes] = useState("XXX");

  useEffect(()=>{
    switch(true){
      

      case URL_NAME.toLowerCase() === '/support':
        setHeading('Support');
        setSupport(<Support/>);
        setBack('/')
        setUserid(null);
        setName(null);
        setGender(null);
        setDob(null);
        setDes(null);
        break;

        // Admin


      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/attendance':
        setHeading('Adminstration');
        setUsertype('Admin');
        setAttendance(<Table/>);
        setBack('/dashboard/admin_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/review':
          setHeading('Adminstration');
          setUsertype('Admin');
          setComplaint(<Complaint/>);
          setBack('/dashboard/admin_dashboard');
          break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/special_request':
          setHeading('Adminstration');
          setUsertype('Admin');
          setNotice(<Notice/>);
          setBack('/dashboard/admin_dashboard');
          break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/notice':
        setHeading('Adminstration');
        setUsertype('Admin');
        setNotice(<Notice/>);
        setBack('/dashboard/admin_dashboard');
        break; 
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/complaint':
        setHeading('Adminstration');
        setUsertype('Admin');
        setNotice(<Notice/>);
        setBack('/dashboard/admin_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/admin_dashboard/support':
        setHeading('Adminstration');
        setUsertype('Admin');
        setSupport(<Support/>);
        setBack('/dashboard/admin_dashboard');
        setSupportstatus('hidden')
        break;  


          // STAFF


      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/attendance':
        setHeading('Staff');
        setUsertype('Staff');
        setAttendance(<Table/>);
        setBack('/dashboard/staff_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/complaint':
        setHeading('Staff');
        setUsertype('Staff');
        setComplaint(<Complaint/>);
        setBack('/dashboard/staff_dashboard');
        break;
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/notice':
        setHeading('Staff');
        setUsertype('Staff');
        setNotice(<Notice/>);
        setBack('/dashboard/staff_dashboard');
        break;  
      case URL_NAME.toLowerCase() === '/dashboard/staff_dashboard/support':
        setHeading('Staff');
        setUsertype('Staff');
        setSupport(<Support/>);
        setBack('/dashboard/staff_dashboard');
        setSupportstatus('hidden')
        break; 

        // Studnet


      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/attendance':
        setHeading('Student');
        setUsertype('Student');
        setAttendance(<Table/>);
        setBack('/dashboard/student_dashboard');
        break;

      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/complaint':
        setHeading('Student');
        setUsertype('Student');
        setComplaint(<Complaint/>);
        setBack('/dashboard/student_dashboard');
        break;

      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/notice':
        setHeading('Student');
        setUsertype('Student');
        setNotice(<Notice/>);
        setBack('/dashboard/student_dashboard');
        break;  
      case URL_NAME.toLowerCase() === '/dashboard/student_dashboard/support':
        setHeading('Student');
        setUsertype('Student');
        setSupport(<Support/>);
        setBack('/dashboard/student_dashboard');
        setSupportstatus('hidden')
        break; 
    }
  },[]);



  return (
    <React.Fragment>
    {/* NEED FIXING BELOW !! */}
    <div className='flex flex-row h-screen w-[100%]'>
      <div className='h-screen w-screen'>
          <div className='flex flex-col justify-center items-center mt-10 md:mt-10'>
            <div className=''>
              <p className='font-Amsterdam text-[#F9C041] font-thin md:text-4xl text-2xl mx-1'>
                {heading}
              </p>
            </div>
            <div className='ml-[10rem] md:ml-[2rem]'>
              <p className='lg:text-2xl text-gray-700 md:text-xl font-Montserrat mx-1 '>
              Panel
              </p>
            </div>
          </div>
        <div className='flex flex-col'>
        <div className='border-t-2'></div>
          <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start md:h-[88vh]'>
            <div className=' md:h-[88vh] w-2/6 md:w-2/6 lg:w-1/6 flex flex-col items-center justify-between md:border-r-2'>
              <div className='flex flex-col items-center '>
                <img src={user_img} className='w-[6rem]   border-[#F9C041] rounded-full mt-8 mb-4'></img>
                  <div className='flex flex-col'>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>{usertype} ID: <span className='font-normal text-md italic  text-[#F9C041]'>{data.reg_no}</span></label>
                    <label className='md:text-lg text-sm font-bold text-gray-700'>Name: <span className='font-normal text-md italic  text-[#F9C041]'>{data.name}</span></label>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>Gender: <span className='font-normal text-md italic  text-[#F9C041]'>{data.gender}</span></label>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>D.O.B: <span className='font-normal text-md italic  text-[#F9C041]'>{data.dob}</span></label>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>Designation: <span className='font-normal text-md italic text-[#F9C041]'>{data.type}</span></label>
                  </div>
              </div>
              <Link to='/'>
                <div className='mt-10 md:mb-6 cursor-pointer'>
                  <div className='bg-[#F9C041]  py-2 px-8 rounded-full text-lg text-white border-2 border-white hover:text-[#F9C041] hover:bg-white hover:border-2 hover:border-[#F9C041]'>
                    Logout
                  </div>
                </div>
              </Link>
            </div>
            <div className='w-4/6 md:w-4/6 lg:w-5/6 flex flex-col items-center'>
              {attendance}
              {complaint}
              {notice}
              {support}
              {/* <Link to={back}>
                <div className=' mt-10 md:mb-6 cursor-pointer'>
                  <div className='bg-[#F9C041]  py-2 px-8 rounded-full text-lg text-white border-2 border-white hover:text-[#F9C041] hover:bg-white hover:border-2 hover:border-[#F9C041]'>
                    Back
                  </div>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className='md:block hidden' >
        <Yellow/>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Dashboard