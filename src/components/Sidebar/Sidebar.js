import React from 'react'
import logo from '../../images/flirtify-logos2.png'
import dashboard from '../../images/dashboard.png'
import match from '../../images/match.png'
import chat from '../../images/chat.png'
import profile from '../../images/profile.png'
import premium from '../../images/premium.png'
import './Sidebar.css'
import { Link } from 'react-router-dom'


export default function Sidebar(props) {
    return (
        <>
                <div className="panel">
                    <div className="panel-logo">
                        <img src={logo} alt="" className='logo4' />

                    </div>
                    <div className="space9">

                    </div>
                    <Link to='/dashboard'>    <div className="panel-item" id={window.location.pathname === '/dashboard' ? 'onclicked' : ''}>
                        <div className="panel-image">
                            <img src={dashboard} alt="" className='panel-image-css' />
                        </div>
                        <div className="panel-name">
                            Dashboard
                        </div>
                    </div> </Link >
                    <Link to='/matches'>   <div className="panel-item" id={window.location.pathname === '/matches' ? 'onclicked' : ''}> <div className="panel-image">
                        <img src={match} alt="" className='panel-image-css' />
                    </div>
                        <div className="panel-name">
                            Matches
                        </div></div> </Link >
                    <Link to='/chat'>    <div className="panel-item" id={window.location.pathname === '/chat' ? 'onclicked' : ''}><div className="panel-image">
                        <img src={chat} alt="" className='panel-image-css' />
                    </div>
                        <div className="panel-name">
                            Chat
                        </div></div> </Link >
                    <Link to='/profile'>    <div className="panel-item" id={window.location.pathname === '/profile' ? 'onclicked' : ''}><div className="panel-image">
                        <img src={profile} alt="" className='panel-image-css' />
                    </div>
                        <div className="panel-name">
                           Your Account
                        </div></div> </Link >
                    <Link to='/premium'>    <div className="panel-item" id={window.location.pathname === '/premium' ? 'onclicked' : ''}><div className="panel-image">
                        <img src={premium} alt="" className='panel-image-css' />
                    </div>
                        <div className="panel-name">
                            Premium
                        </div></div> </Link >

                </div>
                

        </>
    )
}
