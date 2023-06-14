import React from 'react'
import { useState } from "react";
import eye from '../../images/eye.png'
import Error from '../Error-page/Error';
import Sucess from '../Error-page/Sucess';
import Navbar from '../Home-Page/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

export default function Email(props) {
    const [type, settype] = useState("password")
    const [error_message, seterror_message] = useState("")
    const [errortype, seterrortype] = useState("")
    const nav = useNavigate()
    function Handel_show() {
        if (type === "text") {
            settype("password")
        }
        else if (type === "password") {
            settype("text")
        }
    }

    function sendotp() {
        props.setotp("sending")
        fetch('http://localhost:8000/dating/auth/otpgenerator', {

            method: 'POST',
            body: JSON.stringify({
                email: props.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    props.setotp(data.otpis)
                    console.log("data" + data.otpis)
                }
                else if (data.status === 203) {
                    nav("/login")
                }

                else {
                    seterror_message(data.Message)
                    seterrortype("2")
                    props.setotp("")

                }



            })
    }

    function verifyotp() {

        if ((props.otp === props.userotp)) {
            seterror_message("Yay Email Has verified sucessfully 🎉")
            seterrortype("1")

            setTimeout(() => {
                props.NextButton()
            }, 2000)

        }
        else {
            seterror_message("Otp is incorrect")
            seterrortype("2")



        }
    }





    return (
        <>
            <div className="sign-up-page">
             <Navbar/>


                {errortype === "2" ? <Sucess error_message={error_message} /> : null}
                {errortype === "1" ? <Error error_message={error_message} /> : null}

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


                    {props.otp !== "" && props.otp !== "sending" ? <> <div className="details-heading">
                        Otp
                    </div>
                        <div className="input">
                            <input type="text" className='input-details' id='otp' value={props.userotp} onChange={props.Handel_onchange} />
                        </div></> : null}





                    <div className="next">
                        {(props.email !== "" && props.password.length >= 8 && props.otp !== "sending") ? <button className='next-button-enabled' type="submit" onClick={props.otp === "" ? sendotp : verifyotp} >{props.otp === "" ? <>Next</> : <>Verify</>}</button> : <button className='next-button' disabled type="submit" onClick={props.NextButton}>{props.otp === "sending" ? <>Sennding otp....</> : <>Next</>}</button>
                        }

                    </div>
                </div>


            </div>



        </>
    )
}
