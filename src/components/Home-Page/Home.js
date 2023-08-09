import React from 'react'
import MainText from './MainText/MainText';
import Navbar from './Navbar/Navbar';
import Points from './Social-points/Points';
import './Home.css'

export default function Home(props) {


  return (
    <>
      <div className='home'>


        <Points /> <Navbar loggedin={props.loggedin} setloggedin={props.setloggedin} />


        <div className="tex">
          <div className="af">
            <MainText />

          </div>

        </div>


      </div>



    </>
  )
}
