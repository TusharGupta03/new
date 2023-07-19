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
        <div className="social-points"><img src={facebook} alt="" className="points" /><div className="url"> <div className="url-value">http://facebook.com</div></div></div>
        <div className="social-points"><img src={instagram} alt="" className="points" /><div className="url"><div className="url-value">http://instagram.com</div></div></div>
        <div className="social-points"><img src={twitter} alt="" className="points" /><div className="url"><div className="url-value">http://twitter.com</div></div></div>
        <div className="social-points"><img src={mail} alt="" className="points" /><div className="url"><div className="url-value">http://gmail.com</div></div></div>
      </div>
    </>
  )
}
