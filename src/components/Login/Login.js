import React from 'react'
import { useState } from "react";
import eye from '../../images/eye.png'
import { useNavigate } from 'react-router-dom';
import Error from '../Error-page/Error';
import Navbar from '../Home-Page/Navbar/Navbar';



export default function Login(props) {
    const [email, setemail] = useState("");
    const [password, setpassowrd] = useState("");
    const [type, settype] = useState("password")
    const [status, setstatus] = useState("")
    const nav = useNavigate()

    function Handel_onchange(e) {
        if (e.target.type === "email") {
            setemail(e.target.value)
        }
        else if ((e.target.type === "password" || e.target.type === "text") && e.target.id === "pass") {
            setpassowrd(e.target.value)
        }

    }
    function Handel_show() {
        if (type === "text") {
            settype("password")
        }
        else if (type === "password") {
            settype("text")
        }
    }
    function NextButton() {
        const details = {
            email: email,
            password: password
        }


        fetch('http://localhost:8000/dating/auth/login', {

            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.status === 200) {
                    props.setloggedin(true)
                    localStorage.setItem("user", "true")
                    nav("/")
                }
                else {
                    setstatus("404")
                }



            }
            )



    }

    return (
        <>
            <div className="sign-up-page">
                <Navbar />

                {status === "404" ? <Error error_message="Invalid Credentials" /> : null}



                <div className="sign-Up">
                    <div className="heading">
                        Log In
                    </div>
                    <div className="details-heading">
                        Email
                    </div>
                    <div className="input">
                        <input type="email" className='input-details' value={email} onChange={Handel_onchange} />
                    </div>
                    <div className="details-heading">
                        Password
                    </div>
                    <div className="input" id='show-password'>
                        <input type={type} className='input-details' id='pass' value={password} onChange={Handel_onchange} />
                        <img src={eye} alt="" className="show" onClick={Handel_show} />
                    </div>








                    <div className="next">
                        {(email !== "" && password.length >= 8) ? <button className='next-button-enabled' type="submit" onClick={NextButton} >Log in</button> : <button className='next-button' disabled type="submit">Log in </button>
                        }

                    </div>
                </div>


            </div>


        </>
    )
}
