import React from "react";
import logo from "../../images/flirtify-logo.png";
import "./Sign-up.css";
import { useState } from "react";
import Photo from "./Photo";
import Email from "./Email";
import Personal from "./Personal";
import Intrest from "./Intrest";
import { Base64 } from "js-base64";

export default function Signup() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";

    const [page, setpage] = useState(4);

    const [email, setemail] = useState("");
    const [password, setpassowrd] = useState("");
    const [name, setname] = useState("");
    const [date, setdate] = useState("");
    const [gender, setgender] = useState("");
    const [intrestarr, setIntrest] = useState([]);
    const index = ['0', '1', '2']
    const index2 = ['3', '4', '5']


    function intrest_handel(event) {
        let intrest = [...intrestarr];
        if (intrest.indexOf(event.target.innerHTML) > -1) {
            intrest.splice(intrest.indexOf(event.target.innerHTML), 1);
            setIntrest(intrest);
            event.target.style.border = "2px solid #d76e75";
        } else {
            intrest.push(event.target.innerHTML);
            setIntrest(intrest);
            event.target.style.border = "3px solid #7e2127";
            console.log(intrest);
        }
    }

    const [previewUrl, setPreviewUrl] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
    ]);

    function NextButton() {
        if (page === 1) {
            var encode = Base64.encode(password);

            setpassowrd(encode);
            console.log("inside");
            setpage(page + 1);
        } else {
            setpage(page + 1);
        }
    }

    function Handel_browse(event) {
        let a = event.target.id;
        document.getElementsByClassName("input-file")[a].click();
    }

    function Handel_onchange(e) {
        if (e.target.type === "file") {
            let a = e.target.name;
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.onload = (e) => {
                let new_arr = [...previewUrl];
                new_arr[a] = e.target.result;
                setPreviewUrl(new_arr);
            };
            reader.readAsDataURL(file);
        } else if (e.target.type === "email") {
            setemail(e.target.value);
        } else if (
            (e.target.type === "password" || e.target.type === "text") &&
            e.target.id === "pass"
        ) {
            setpassowrd(e.target.value);
        } else if (e.target.type === "text") {
            setname(e.target.value);
        } else if (e.target.type === "date") {
            setdate(e.target.value);
        } else if (e.target.name === "gender") {
            setgender(e.target.value);
        }
    }

    function Handel_cross(e) {
        let a = e.target.id;
        let new_arr = [...previewUrl];
        new_arr[a] = null;
        setPreviewUrl(new_arr);
    }

    if (page === 1) {
        return (
            <>
                <Email
                    title={"Sign Up"}
                    logo={logo}
                    email={email}
                    page={page}
                    password={password}
                    NextButton={NextButton}
                    Handel_onchange={Handel_onchange}
                />
            </>
        );
    }
    if (page === 2) {
        return (
            <>
                <Personal
                    logo={logo}
                    name={name}
                    date={date}
                    gender={gender}
                    Handel_onchange={Handel_onchange}
                    NextButton={NextButton}
                />
            </>
        );
    }

    if (page === 3) {
        return (
            <>
                <div className="sign-up-page">
                    <div className="logo1">
                        <img className="logo2" src={logo} alt="" />
                    </div>
                    <Intrest
                        intrest_handel={intrest_handel}
                        NextButton={NextButton}
                        intrestarr={intrestarr}
                    />
                </div>
            </>
        );
    }
    if (page === 4) {
        return (
            <>
                <div className="sign-up-page">
                    <div className="logo1">
                        <img className="logo2" src={logo} alt="" />
                    </div>
                    <div className="sign-Up-Intrest">
                        <div className="heading">
                            Upload Photos <h6>(Try to upload vertical and solo photo)</h6>
                        </div>
                        <div className="photos-box">
                            <div className="photos">


                                {index.map(i => {
                                    return <Photo
                                        key={i}
                                        index={i}
                                        previewUrl={previewUrl}
                                        Handel_browse={Handel_browse}
                                        Handel_onchange={Handel_onchange}
                                        Handel_cross={Handel_cross}
                                        name={i} />
                                })}
                            </div>
                            <div className="photos" id="photos2">


                                {index2.map(i => {
                                    return <Photo
                                        key={i}
                                        index={i}
                                        previewUrl={previewUrl}
                                        Handel_browse={Handel_browse}
                                        Handel_onchange={Handel_onchange}
                                        Handel_cross={Handel_cross}
                                        name={i} />
                                })}
                            </div>
                        </div>
                        <div className="for-bac">
                            <div className="next-intrest">
                                {previewUrl[0] === null &&
                                    previewUrl[1] === null &&
                                    previewUrl[2] === null &&
                                    previewUrl[3] === null &&
                                    previewUrl[4] === null &&
                                    previewUrl[5] === null ? (
                                    <button
                                        className="next-button"
                                        disabled
                                        type="submit"
                                        onClick={NextButton}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        className="next-button-enabled"
                                        type="submit"
                                        onClick={NextButton}
                                    >
                                        Get Otp
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
