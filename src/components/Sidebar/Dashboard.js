import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import forward from '../../images/right-arrow.png'
import backward from '../../images/backward.png'
import {sockets} from '../socket'
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'



export default function Dashboard() {
    const nav = useNavigate()
    const [display, setdisplay] = useState(true)

    const [photos, setphotos] = useState([])
    const [notifications, setnotifications] = useState([])
    const [nothing, setnothing] = useState(false)
    const socket = useRef(null)

    console.log("h")
    function se() {
        setdisplay(false)
    }

    function go() {
        nav('/login')
    }

    useEffect(() => {
        console.log("effect start here ")
        fetch(`https://backend-50ji.onrender.com/dating/matches/liked`, {

            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            withCredentials: true,
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.sucess === true) {
                    let new_arr = [...photos]
                    new_arr = data.all_user
                    setphotos(new_arr)

                    if (new_arr.length !== 0) {
                        setnothing(true)
                    }
                    se()

                }
                else {
                    // go()
                }



            })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {


        function search() {

            fetch(`https://backend-50ji.onrender.com/dating/user/notification`, {

                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                withCredentials: true,
                credentials: 'include'
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.sucess === true) {
                        let new_arr = [...notifications]
                        new_arr = data.notifications.notification
                        setnotifications(new_arr)
                    }
                    else {
                        go()
                    }



                })
        }

        search()

        const fun = async () => {

            socket.current = await sockets();

            socket.current.on("new_notification", (data) => {
                console.log("fetch new notification")
                search()
            })
        }
        fun()

        // socket.emit("new_noti", "hghdagdh")

    }

        // eslint-disable-next-line
        , [])




    function scrollPhotos() {
        var container = document.getElementsByClassName("match-container")[0];
        var container2 = document.getElementsByClassName("match")[0];
        container.scrollLeft += container2.offsetWidth;
    }
    function scrollPhotosb() {
        var container = document.getElementsByClassName("match-container")[0];
        var container2 = document.getElementsByClassName("match")[0];
        container.scrollLeft -= container2.offsetWidth;


    }
    function age_convertor(e) {
        let today_date = new Date()
        let dob = new Date(e)
        let age = today_date.getFullYear() - dob.getFullYear()
        return age;
    }
    return (
        <>
            {console.log("return start here ")}
            {display ? <Loader /> : null}
            <div className="dashboard">
                <Sidebar />
                <div className="con">

                    <div className="forward">
                        <img src={forward} alt="" onClick={scrollPhotos} />
                    </div>
                    <div className="backward">
                        <img src={backward} alt="" onClick={scrollPhotosb} />
                    </div>
                    <div className="headi">
                        Recently Liked
                    </div>
                    <div className="match-container">
                        {nothing ? <>  {photos.map((user, index) => {
                            return <div key={index}>
                                <div className="match">
                                    <div className="match-photo">
                                        <img src={user.photo[0]} alt="" className="match-url" />
                                    </div>
                                    <div className="name">
                                        {user.name} , {age_convertor(user.dob)}
                                    </div>
                                </div>
                            </div>
                        })}</> : <div className="nothing_here">
                            Don't Worry Just Click On Matches
                        </div>}











                    </div>

                    <div className="headi2">
                        Notifications
                    </div>


                    <div className="con2">


                        <div className="notifications">
                            {/* <div className="cd">

                            </div> */}
                            {notifications.map((notifi, index) => {
                                return <div key={index} className='notification' >
                                    {notifi}
                                </div>
                            })}
                        </div>

                        <div className="other-utils">

                        </div>


                    </div>


                </div>

            </div>

        </>
    )
}
