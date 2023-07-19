import React from 'react'
import './Loader.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import a from '../../images/33349-double-heart-loader.json'

export default function Loader() {
  return (
    <>

      <div className="heart-shape">
        <Player
          autoplay
          loop
          src={a}
          style={{ height: '100vh', width: '100vw' }}
        >
          <Controls visible={false} />
        </Player>
      </div>
    </>
  )
}
