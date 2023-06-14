import React from "react";
import logo from "../../images/flirtify-logo.png";
import "./Sign-up.css";
import { useState } from "react";
import Photo from "./Photo";
import Email from "./Email";
import Personal from "./Personal";
import Intrest from "./Intrest";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home-Page/Navbar/Navbar";


export default function Signup() {
    document.getElementsByTagName("body")[0].style.overflow = "auto";

    const [page, setpage] = useState(1);

    const [email, setemail] = useState("");
    const [password, setpassowrd] = useState("");
    const [name, setname] = useState("");
    const [date, setdate] = useState("");
    const [gender, setgender] = useState("");
    const [intrestarr, setIntrest] = useState([]);
    const [previewUrl, setPreviewUrl] = useState([]);
    const [otp, setotp] = useState("")
    const [userotp, setuserotp] = useState("")
    const nav = useNavigate()



    function Handel_onchange(e) {
        if (e.target.type === "file" && e.target.files[0] != null) {
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
        } else if (e.target.type === "text" && e.target.id === "otp") {
            setuserotp(e.target.value);
        } else if (e.target.type === "date") {
            setdate(e.target.value)
        } else if (e.target.type === "text") {
            setname(e.target.value);
        } else if (e.target.type === "date") {
            setdate(e.target.value);
        } else if (e.target.name === "gender") {
            setgender(e.target.value);
        }
    }

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
        }
    }


    function Handel_browse(event) {
        let a = event.target.id;
        document.getElementsByClassName("input-file")[a].click();
    }



    function Handel_cross(e) {
        let a = e.target.id;
        let new_arr = [...previewUrl];
        new_arr[a] = null;
        setPreviewUrl(new_arr);
    }

    function NextButton() {


        setpage(page + 1);




    }
    function SubmitButton() {
        const Details = {
            email: email,
            password: password,
            name: name,
            dob: date,
            gender: gender,
            intrest: intrestarr,
            photo: previewUrl

        }
        fetch('http://localhost:8000/dating/user/new_user', {

            method: 'POST',
            body: JSON.stringify(Details),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 200) {
                    nav("/login")
                }
                else {
                    console.log("Error in uploading ....")
                }



            })

    }



    if (page === 1) {
        return (
            <>
                <Email
                    title={"Sign Up"}
                    userotp={userotp}
                    setotp={setotp}
                    otp={otp}
                    logo={logo}
                    page={page}
                    email={email}
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
                    <Navbar loggedin="false" />
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
                    <Navbar loggedin="false" />

                    <div className="sign-Up-Intrest">
                        <div className="heading">
                            Upload Photos <h6>(Try to upload vertical and solo photo)</h6>
                        </div>
                        <div className="photos-box">
                            <div className="photos">
                                <Photo
                                    index="0"
                                    previewUrl={previewUrl}
                                    Handel_browse={Handel_browse}
                                    Handel_onchange={Handel_onchange}
                                    Handel_cross={Handel_cross}
                                />
                                <Photo
                                    index="1"
                                    previewUrl={previewUrl}
                                    Handel_browse={Handel_browse}
                                    Handel_onchange={Handel_onchange}
                                    Handel_cross={Handel_cross}
                                />
                                <Photo
                                    index="2"
                                    previewUrl={previewUrl}
                                    Handel_browse={Handel_browse}
                                    Handel_onchange={Handel_onchange}
                                    Handel_cross={Handel_cross}
                                />
                            </div>

                            <div className="photos" id="photos2">
                                <Photo
                                    index="3"
                                    previewUrl={previewUrl}
                                    Handel_browse={Handel_browse}
                                    Handel_onchange={Handel_onchange}
                                    Handel_cross={Handel_cross}
                                />
                                <Photo
                                    index="4"
                                    previewUrl={previewUrl}
                                    Handel_browse={Handel_browse}
                                    Handel_onchange={Handel_onchange}
                                    Handel_cross={Handel_cross}
                                />
                                <Photo
                                    index="5"
                                    previewUrl={previewUrl}
                                    Handel_browse={Handel_browse}
                                    Handel_onchange={Handel_onchange}
                                    Handel_cross={Handel_cross}
                                />
                            </div>
                        </div>
                        <div className="for-bac">
                            <div className="next-intrest">
                                {previewUrl.length > 0 ? (
                                    <button
                                        className="next-button-enabled"
                                        type="submit"
                                        onClick={SubmitButton}
                                    >
                                        Upload
                                    </button>
                                ) : (
                                    <button
                                        className="next-button"
                                        disabled
                                        type="submit"

                                    >
                                        Next
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
