import React from 'react'
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../resource/animation/wampus.json";

function Yellow_card_left() {

  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <React.Fragment>
        <div className= 'w-screen bg-[#F9C041] flex justify-center items-center'>
        <div className='mb-[2rem] md:mb-[4rem] lg:mb-[6rem]'>
          <div className='invisible md:w-[30vw] md:visible'>{ View }</div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Yellow_card_left