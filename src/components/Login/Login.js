import React from 'react'
import { useState } from "react";
import logo from "../../images/flirtify-logo.png";
import Email from '../Sign-up/Email';


export default function Login(props) {
    const [email, setemail] = useState("");
    const [password, setpassowrd] = useState("");
    function Handel_onchange(e) {
        if (e.target.type === "email") {
            setemail(e.target.value)
        }
        else if ((e.target.type === "password" || e.target.type === "text") && e.target.id === "pass") {
            setpassowrd(e.target.value)
        }

    }
    function NextButton() {




    }

    return (
        <>
            <Email
                title={"Log In"}
                logo={logo}
                email={email}
                password={password}
                NextButton={NextButton}
                Handel_onchange={Handel_onchange}
            />
        </>
    )
}
