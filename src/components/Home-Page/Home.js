import React from 'react'
import Loader from '../Loader/Loader';
import MainText from './MainText/MainText';
import Navbar from './Navbar/Navbar';
import Points from './Social-points/Points';
import './Home.css'

import { useState } from "react";
export default function Home(props) {
  const [display, setdisplay] = useState(true)

  setTimeout(() => {
    setdisplay(false)

  }, 3600);
  return (
    <>
      {display ? <Loader /> : null}
      <div className='home'>
        <Points /> <Navbar loggedin={props.loggedin} setloggedin={props.setloggedin} /><MainText />
      </div>



    </>
  )
}
