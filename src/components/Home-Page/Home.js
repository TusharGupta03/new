import React from 'react'
import MainText from './MainText/MainText';
import Navbar from './Navbar/Navbar';
import Points from './Social-points/Points';
import './Home.css'

export default function Home(props) {

  // setTimeout(() => {
  //   setdisplay(false)

  // }, 3600);
  return (
    <>
     
      <div className='home'>
        <Points /> <Navbar   /><MainText />
      </div>



    </>
  )
}
