import React from 'react'
import logo from '../../images/flirtify-logo.png'
import './Sign-up.css'
import { useState } from "react";


export default function Signup() {
    document.getElementsByTagName('body')[0].style.overflow = "auto";


    const [page, setpage] = useState(1)

    function NextButton() {
        setpage(page + 1)
    }

    const intrest = []

 

    function intrest_handel(event) {
        if (intrest.indexOf(event.target.innerHTML) > -1) {

            intrest.splice(intrest.indexOf(event.target.innerHTML), 1);
            event.target.style.border="2px solid #d76e75"
        }
        else {
            
            intrest.push(event.target.innerHTML)
            event.target.style.border="3px solid #7e2127"
        }

        console.log(intrest.indexOf(event.target.innerHTML))
        console.log(intrest)
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
                        <div className="input">
                            <input type="password" className='input-details' />
                        </div>
                        <div className="submit">
                            <button className='submit-button' type="submit" onClick={NextButton}>Next</button>
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
                            <div className="submit">
                                <button className='submit-button' type="submit" onClick={NextButton}>Next</button>
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
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Radfsdcing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racidefsdfng</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racdfsding</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Raciyusedtdyuwetng</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={intrest_handel}>Racdsfsdfing</button>
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
                        </div>

                        <div className="for-bac">
                            <div className="submit">
                                <button className='submit-button' type="submit" onClick={NextButton}>Next</button>
                            </div>


                        </div>
                    </div>
                </div>

            </>
        )
    }


}
