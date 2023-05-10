import React from 'react'
import heart from '../images/heart.png'

export default function MainText() {
  return (
    <div className='content'>
      <div className="space2">
        
      </div>
      <div className="heart">
        <img src={heart} className='heart-img' alt="" />
      </div>
    </div>
  )
}
