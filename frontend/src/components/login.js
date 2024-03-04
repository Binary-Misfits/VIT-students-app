import React from 'react'
import Yellow_card_left from './yellow_card_left';
import White_chard_right from './white_chard_right';

function Login() {
  return (
    
    <React.Fragment>
    <div className =' h-screen w-screen flex flex-col md:flex-row  justify-between overflow-y-hidden'>
    <White_chard_right/>
    <Yellow_card_left/>
    </div>
    </React.Fragment>
  )
}

export default Login