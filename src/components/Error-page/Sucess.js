import React from 'react'
import './Error.css'

export default function Sucess(props) {
    return (
        <>
            <div className="sucess">
                <div className="sucess-message">
                    {props.error_message}
                </div>
            </div>
        </>
    )
}
