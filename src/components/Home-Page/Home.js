import React from 'react'
import Loader from '../Loader/Loader';
import MainText from './MainText/MainText';
import Navbar from './Navbar/Navbar';
import Points from './Social-points/Points';
import './Home.css'

import { useState } from "react";
export default function Home(props) {
  document.getElementsByTagName('body')[0].style.overflow = "hidden";

  const [loader, set_loader] = useState(false);
  setTimeout(function () {
    set_loader(true);
  }, 6000)

  const [loader2, set_loader2] = useState(true);
  setTimeout(function () {
    set_loader2(false);
    document.getElementsByTagName('body')[0].style.overflow = "auto";
  }, 7400)

  return (
    <>
      {loader ?
        <div className='home'>
          <Points /> <Navbar loggedin={props.loggedin} setloggedin={props.setloggedin} /><MainText />
        </div>
        : null}

      {loader2 ? <Loader /> : null}
    </>
  )
}
