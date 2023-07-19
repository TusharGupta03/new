import React from 'react'
import Confetti from 'react-confetti'
import heart from '../../images/heart3.png'
import './Matched.css'
export default function MAtched(props) {

    function ab() {
        props.setshowmatched(false)
    }

    return (


        <>
            <div className="matched">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={1000}
                    recycle={false}
                />

                <div className="matched-profile">
                    <div className="user-image" id='user'>
                        <div className="user">
                            <img className='ims' src={props.user.photo[0]} alt="" />
                        </div>
                        <div className="mat-name">
                            {props.user.name}
                        </div>
                    </div>
                    <div className="user-image" id='mat'>
                        <div className="user">
                            <img  className='ims' src={props.matcher_image} alt="" />
                        </div>
                        <div className="mat-name">
                            {props.matcher}
                        </div>
                    </div>
                    <div className="shpae-title">
                        <div>


                            <img src={heart} alt="" className='hear' />
                        </div>
                        <div className="title">
                            Congratulation's You Have a Matched Profile
                        </div>
                        <div >
                            <button className="next-profile" onClick={ab}>See Next Profile</button>

                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

