import React from 'react'
import facebook from '../../../images/facebook.png'
import instagram from '../../../images/instagram.png'
import twitter from '../../../images/twitter.png'
import mail from '../../../images/email.png'
import './Points.css'

export default function POints() {
  return (
    <>

      <div className="social">
        <div className="space4"></div>
        <div className="social-points"><img src={facebook} alt="" className="points" /></div>
        <div className="social-points"><img src={instagram} alt="" className="points" /></div>
        <div className="social-points"><img src={twitter} alt="" className="points" /></div>
        <div className="social-points"><img src={mail} alt="" className="points" /></div>
      </div>
    </>
  )
}
