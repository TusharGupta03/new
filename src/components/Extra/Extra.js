import React, { useState } from 'react'
import './extra.css'

export default function Extra() {
    const [url, seturl] = useState("")
    fetch('http://localhost:8000/dating/auth/login/tushargupta18224575@gmail.com', {

        method: 'GET',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        withCredentials: true,
        credentials: 'include'
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            seturl(data.photo[0])




        }
        )

    return (
        <div>
            <img className='a' src={url}  alt="" />
        </div>
    )
}
