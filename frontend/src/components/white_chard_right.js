import React from 'react'
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../resource/animation/wampus.json";
import Login_card from './login/login_card';

function White_chard_right() {

  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <React.Fragment>
        <div className='w-screen  md:h-screen  flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center mt-20 md:mt-0'>
            <div className='ml-[-4rem]'>
              <p className='font-Amsterdam text-[#F9C041] font-thin lg:text-7xl md:text-5xl text-4xl mx-1'>
                Engima
              </p>
            </div>
            <div className='ml-[6rem] md:ml-[12rem]'>
              <p className='lg:text-2xl md:text-xl font-Montserrat mx-1'>
                Management
              </p>
            </div> 
          </div>
          <div className='flex md:hidden w-[40vw] justify-center items-center'>{ View }</div>
          <Login_card/>
        </div>
    </React.Fragment>
  )
}

export default White_chard_right