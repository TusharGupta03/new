import React from 'react'
import logo from '../../images/flirtify-logo.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />

            <div className="space">

            </div>

            <div className="navbar-components">
                <div className="component" id='home'><a href='/'>Home</a><div className="underline"></div></div>
                <div className="component" id='contact'><a href='/'>Contact</a><div className="underline"></div></div>
                <div className="component" id='about'><a href='/'>About</a><div className="underline"></div></div>
                <div className="component" id='reviews'><a href='/'>Reviews</a><div className="underline"></div></div>

                <div className="component login"><button className="login-button">
                    LogIn</button>
                </div>
                <div className="component sign-up ">
                    <button className="sign-up-button">
                        SignUp
                    </button>
                </div>

            </div>
        </div>
    )
}
