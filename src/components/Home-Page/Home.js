import React from 'react'
import Loader from '../Loader/Loader';
import MainText from '../MainText/MainText';
import Navbar from '../Navbar/Navbar';
import Points from '../Social-points/Points';
import './Home.css'

import { useState } from "react";
export default function Home() {
  document.getElementsByTagName('body')[0].style.overflow = "hidden";

  const [loader, set_loader] = useState(false);
  setTimeout(function () {
    set_loader(true);
    console.log(loader)
  }, 6000)

  const [loader2, set_loader2] = useState(true);
  setTimeout(function () {
    set_loader2(false);
    document.getElementsByTagName('body')[0].style.overflow = "auto";
    console.log(loader2)
  }, 7400)

  return (
    <>
      {loader ?
        <div className='home'>
          <Points /> <Navbar /><MainText />
        </div>
        : null}

      {loader2 ? <Loader /> : null}
    </>
  )
}
