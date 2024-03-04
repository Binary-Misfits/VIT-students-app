import React from 'react'
import attendance_img from './img/attendance_img.svg'
// import special_request_img from './img/special_request_img.svg'
import support_img from './img/support_img.svg'
import notice_img from './img/notice_img.svg'
import review_img from './img/file.svg'
import { Link } from "react-router-dom"

function StaffMenu() {
  return (
    <React.Fragment>
        <div className='flex flex-col justify-center items-center '>
          <div className='my-4'>
          <lable className='font-bold text-gray-700 text-sm md:text-[24px]'>MENU</lable>
          </div>
          <div className='flex md:flex-col flex-row '>
            <div className='flex flex-col md:flex-row justify-center items-center '>
            <Link to='/dashboard/staff_dashboard/attendance'>
              <div className='cursor-pointer m-4 w-36 h-36  lg:w-[18rem] lg:h-[16rem] shadow-xl rounded-md flex flex-col justify-center items-center'>
              <img src={attendance_img} className=' border-[#F9C041] w-24 md:w-[10rem]'></img>
              Attendance
              </div>
            </Link>
            <Link to='/dashboard/staff_dashboard/complaint'>
              <div className='cursor-pointer m-4 w-36 h-36  lg:w-[18rem] lg:h-[16rem] shadow-xl rounded-md flex flex-col justify-center items-center'>
              <img src={review_img} className=' border-[#F9C041] w-24 md:w-[8rem]'></img>
              Review
              </div>
            </Link>
              {/* <div className='cursor-pointer m-4 w-36 h-36  lg:w-[18rem] lg:h-[16rem] shadow-xl rounded-md flex flex-col justify-center items-center'>
              <img src={special_request_img} className=' border-[#F9C041] w-24 md:w-[8rem]'></img>
              Special Request
              </div> */}
            </div>
            <div div className='flex flex-col md:flex-row  justify-center items-center'>
            <Link to='/dashboard/staff_dashboard/notice'>
              <div className='cursor-pointer m-4 w-36 h-36  lg:w-[18rem] lg:h-[16rem] shadow-xl rounded-md flex flex-col justify-center items-center'>
              <img src={notice_img} className=' border-[#F9C041] w-24 md:w-[8rem]'></img>
              Notice
              </div>
            </Link>
            <Link to='/dashboard/staff_dashboard/support'>
              <div className='cursor-pointer m-4 w-36 h-36  lg:w-[18rem] lg:h-[16rem] shadow-xl rounded-md flex flex-col justify-center items-center'>
              <img src={support_img} className=' border-[#F9C041] w-24 md:w-[6rem]'></img>
              Support
              </div>
            </Link>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default StaffMenu