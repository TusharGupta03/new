import React from 'react'
import { useState } from "react";
import eye from '../../images/eye.png'

export default function Email(props) {
    const [type, settype] = useState("password")
    function Handel_show() {



        if (type === "text") {
            settype("password")
        }
        else if (type === "password") {
            settype("text")
        }
    }


    return (
        <>
            <div className="sign-up-page">
                <div className="logo1">
                    <img className='logo2' src={props.logo} alt="" />

                </div>

                <div className="sign-Up">
                    <div className="heading">
                        {props.title}
                    </div>
                    <div className="details-heading">
                        Email
                    </div>
                    <div className="input">
                        <input type="email" className='input-details' value={props.email} onChange={props.Handel_onchange} />
                    </div>
                    <div className="details-heading">
                        Password
                    </div>
                    <div className="input" id='show-password'>
                        <input type={type} className='input-details' id='pass' value={props.passsword} onChange={props.Handel_onchange} />
                        <img src={eye} alt="" className="show" onClick={Handel_show} />
                    </div>
                    <div className="next">
                        {(props.email !== "" && props.password.length>=8) ? <button className='next-button-enabled' type="submit" onClick={props.NextButton}>Next</button> : <button className='next-button' disabled type="submit" onClick={props.NextButton}>Next</button>
                        }

                    </div>
                </div>


            </div>

        </>
    )
}
