import React from 'react'
import Navbar from '../menu/Navbar'
import Yellow from '../dashboard/yellow'
import user_img from '../dashboard/img/user_img.svg'
import { Link } from "react-router-dom"
import {data} from "../login/login_card"


function Student_dashboard() {
  return (
    <React.Fragment>
    {/* NEED FIXING BELOW !! */}
    <div className='flex flex-row h-screen w-[100%]'>
      <div className='h-screen w-screen'>
          <div className='flex flex-col justify-center items-center mt-10 md:mt-10'>
            <div className=''>
              <p className='font-Amsterdam text-[#F9C041] font-thin md:text-4xl text-2xl mx-1'>
                Student
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
              <div className='flex flex-col items-center'>
                <img src={user_img} className='w-[6rem]   border-[#F9C041] rounded-full mt-8 mb-4'></img>
                  {/* MAKE SURE TO ADD DATA HERE */}
                  <div className='flex flex-col'>
                  <label className='lg:text-lg text-sm font-bold text-gray-700'>Student ID: <span className='font-normal text-md italic  text-[#F9C041]'>{data.reg_no}</span></label>
                    <label className='md:text-lg text-sm font-bold text-gray-700'>Name: <span className='font-normal text-md italic  text-[#F9C041]'>{data.name}</span></label>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>Gender: <span className='font-normal text-md italic  text-[#F9C041]'>{data.gender}</span></label>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>D.O.B: <span className='font-normal text-md italic  text-[#F9C041]'>{data.dob}</span></label>
                    <label className='lg:text-lg text-sm font-bold text-gray-700'>Designation: <span className='font-normal text-md italic text-[#F9C041]'>{data.type}</span></label>
                  </div>
              </div>
              <Link to='/'>
                <div className=' mt-10 md:mb-6'>
                  <div className='bg-[#F9C041]  py-2 px-8 rounded-full text-lg text-white border-2 border-white hover:text-[#F9C041] hover:bg-white hover:border-2 hover:border-[#F9C041]'>
                    Logout
                  </div>
                </div>
              </Link>
            </div>
            <div className='w-4/6 md:w-4/6 lg:w-5/6 flex flex-col items-center'>
            {/* menu */}
              <Navbar/>
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

export default Student_dashboard