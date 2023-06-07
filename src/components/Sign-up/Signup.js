import React from 'react'
import logo from '../../images/flirtify-logo.png'
import './Sign-up.css'
import { useState } from "react";
import Photo from '../Photos/Photo';
import eye from '../../images/eye.png'


export default function Signup() {
    document.getElementsByTagName('body')[0].style.overflow = "auto";


    const [page, setpage] = useState(1)
    const [type, settype] = useState("password")


    function Handel_show() {



        if (type === "text") {
            settype("password")
        }
        else if (type === "password") {
            settype("text")
        }
    }

    function NextButton() {
        setpage(page + 1)
    }

    const intrest = []



    function intrest_handel(event) {
        if (intrest.indexOf(event.target.innerHTML) > -1) {

            intrest.splice(intrest.indexOf(event.target.innerHTML), 1);
            event.target.style.border = "2px solid #d76e75"
        }
        else {

            intrest.push(event.target.innerHTML)
            event.target.style.border = "3px solid #7e2127"
        }

        console.log(intrest.indexOf(event.target.innerHTML))
        console.log(intrest)
    }


    const [previewUrl, setPreviewUrl] = useState([null, null, null, null, null, null]);

    function Handel_browse(event) {
        let a = event.target.id;
        console.log(a)

        document.getElementsByClassName("input-file")[a].click()

    }

    function Handel_onchange(e) {
        let a = e.target.name
        console.log(a)

        const file = e.target.files[0];
        console.log(file)

        const reader = new FileReader();
        reader.onload = (e) => {
            let new_arr = [...previewUrl]
            new_arr[a] = e.target.result
            setPreviewUrl(new_arr);
        };
        reader.readAsDataURL(file);



    }
    function Handel_cross(e) {
        let a = e.target.id
        console.log(a)
        let new_arr = [...previewUrl]
        new_arr[a] = null
        setPreviewUrl(new_arr);
    }

    if (page === 1) {
        return (
            <>

                <div className="sign-up-page">
                    <div className="logo1">
                        <img className='logo2' src={logo} alt="" />

                    </div>

                    <div className="sign-Up">
                        <div className="heading">
                            Sign Up
                        </div>
                        <div className="details-heading">
                            Email
                        </div>
                        <div className="input">
                            <input type="email" className='input-details' />
                        </div>
                        <div className="details-heading">
                            Password
                        </div>
                        <div className="input" id='show-password'>
                            <input type={type} className='input-details' id='pass' />
                            <img src={eye} alt="" className="show" onClick={Handel_show} />
                        </div>
                        <div className="next">
                            <button className='next-button' type="submit" onClick={NextButton}>Next</button>
                        </div>
                    </div>


                </div>

            </>
        )
    }
    if (page === 2) {
        return (
            <>

                <div className="sign-up-page">
                    <div className="logo1">
                        <img className='logo2' src={logo} alt="" />

                    </div>

                    <div className="sign-Up">
                        <div className="heading">
                            Personal Details
                        </div>
                        <div className="details-heading">
                            Name
                        </div>
                        <div className="input">
                            <input type="email" className='input-details' />
                        </div>
                        <div className="details-heading">
                            Date of Birth
                        </div>
                        <div className="input">
                            <input type="date" className='input-details' />
                        </div>
                        <div className="details-heading">
                            Gender
                        </div>
                        <div className="input">
                            <select name="gender" className='input-details' >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Gay">Gay</option>
                                <option value="Bisxeual">Bisexual</option>
                            </select>
                        </div>
                        <div className="for-bac">
                            <div className="next">
                                <button className='next-button' type="submit" onClick={NextButton}>Next</button>
                            </div>


                        </div>
                    </div>


                </div>

            </>
        )
    }

    if (page === 3) {
        return (
            <>
                <div className="sign-up-page">
                    <div className="logo1">
                        <img className='logo2' src={logo} alt="" />

                    </div>
                    <div className="sign-Up-Intrest">
                        <div className="heading">
                            Select Your Intrest
                        </div>
                        <div className="intrest">
                            <button className='intrest-button' onClick={intrest_handel}>traveling</button>
                            <button className='intrest-button' onClick={intrest_handel}>exercise</button>
                            <button className='intrest-button' onClick={intrest_handel}>going to the theater</button>
                            <button className='intrest-button' onClick={intrest_handel}>dancing</button>
                            <button className='intrest-button' onClick={intrest_handel}>cooking</button>
                            <button className='intrest-button' onClick={intrest_handel}>doing stuff outdoors</button>
                            <button className='intrest-button' onClick={intrest_handel}>politics</button>
                            <button className='intrest-button' onClick={intrest_handel}>pets</button>
                            <button className='intrest-button' onClick={intrest_handel}>photography</button>
                            <button className='intrest-button' onClick={intrest_handel}>sports</button>
                            <button className='intrest-button' onClick={intrest_handel}>art</button>
                            <button className='intrest-button' onClick={intrest_handel}>learning</button>
                            <button className='intrest-button' onClick={intrest_handel}>music</button>
                            <button className='intrest-button' onClick={intrest_handel}>movies</button>
                            <button className='intrest-button' onClick={intrest_handel}>fishing</button>
                            <button className='intrest-button' onClick={intrest_handel}>gardening</button>
                            <button className='intrest-button' onClick={intrest_handel}>swimming</button>
                            <button className='intrest-button' onClick={intrest_handel}>astrology</button>
                            <button className='intrest-button' onClick={intrest_handel}>hiking</button>
                            <button className='intrest-button' onClick={intrest_handel}>foodie</button>
                            <button className='intrest-button' onClick={intrest_handel}>writer</button>
                            <button className='intrest-button' onClick={intrest_handel}>netflix</button>
                            <button className='intrest-button' onClick={intrest_handel}>resding</button>
                            <button className='intrest-button' onClick={intrest_handel}>racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>serial lover</button>
                            <button className='intrest-button' onClick={intrest_handel}>golf</button>
                            <button className='intrest-button' onClick={intrest_handel}>dog loer</button>
                            <button className='intrest-button' onClick={intrest_handel}>pet lover</button>
                            <button className='intrest-button' onClick={intrest_handel}>museum</button>
                            <button className='intrest-button' onClick={intrest_handel}>vlogging</button>
                            <button className='intrest-button' onClick={intrest_handel}>yoga</button>
                            {/* <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button> */}
                        </div>

                        <div className="for-bac">
                            <div className="next-intrest">
                                <button className='next-button' type="submit" onClick={NextButton}>Next</button>
                            </div>


                        </div>
                    </div>
                </div>

            </>
        )
    }
    if (page === 4) {
        return (
            <>
                <div className="sign-up-page">
                    <div className="logo1">
                        <img className='logo2' src={logo} alt="" />

                    </div>
                    <div className="sign-Up-Intrest">
                        <div className="heading">
                            Upload Photos <h6>(Try to upload vertical and solo photo)</h6> 
                        </div>
                        <div className="photos-box">

                            <div className="photos">
                                <Photo index="0" previewUrl={previewUrl} Handel_browse={Handel_browse} Handel_onchange={Handel_onchange} Handel_cross={Handel_cross} name="0" />
                                <Photo index="1" previewUrl={previewUrl} Handel_browse={Handel_browse} Handel_onchange={Handel_onchange} Handel_cross={Handel_cross} name="1" />
                                <Photo index="2" previewUrl={previewUrl} Handel_browse={Handel_browse} Handel_onchange={Handel_onchange} Handel_cross={Handel_cross} name="2" />



                            </div>

                            <div className="photos" id='photos2'>
                                <Photo index="3" previewUrl={previewUrl} Handel_browse={Handel_browse} Handel_onchange={Handel_onchange} Handel_cross={Handel_cross} name="3" />
                                <Photo index="4" previewUrl={previewUrl} Handel_browse={Handel_browse} Handel_onchange={Handel_onchange} Handel_cross={Handel_cross} name="4" />
                                <Photo index="5" previewUrl={previewUrl} Handel_browse={Handel_browse} Handel_onchange={Handel_onchange} Handel_cross={Handel_cross} name="5" />
                            </div>
                        </div>
                        <div className="for-bac">
                            <div className="next-intrest">
                                <button className='next-button' type="submit" onClick={NextButton}>Next</button>
                            </div>


                        </div>


                    </div>
                </div>
            </>
        )
    }


}
