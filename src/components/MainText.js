import React from 'react'
import heart from '../images/heart.png'
import heart2 from '../images/heart2.png'
import { useState } from "react";



export default function MainText() {

    const [find_love, set_find_love] = useState(false);
    setTimeout(function () {
        set_find_love(true);
        console.log(find_love)
    }, 2000)


    return (
        <>
            <div className='content'>
                <div className="space2">
                    <div className="line">
                        <strong> It's Never too late <br /> to Find Match</strong>
                    </div>
                    <div className="application">
                        it's never too late to find a soulmate and fall in love <br /> again ,find your soulmate now
                    </div>
                    <div className="find">
                        <img src={heart2} className='heart2-left' alt="" />
                        <div className="space3">
                            {find_love ? <button className='find-button'> <strong>Find Your Love</strong> </button> : <div></div>}
                        </div>
                        <img src={heart2} className='heart2-right' alt="" />
                    </div>
                </div>
                <div className="heart">
                    <img src={heart} className='heart-img' alt="" />
                </div>

            </div>

        </>
    )
}
