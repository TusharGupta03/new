import React from 'react'

export default function Personal(props) {
    return (
        <>
            <div className="sign-up-page">
                <div className="logo1">
                    <img className="logo2" src={props.logo} alt="" />
                </div>

                <div className="sign-Up">
                    <div className="heading">Personal Details</div>
                    <div className="details-heading">Name</div>
                    <div className="input">
                        <input
                            type="text"
                            className="input-details"
                            value={props.name}
                            onChange={props.Handel_onchange}
                        />
                    </div>
                    <div className="details-heading">Date of Birth</div>
                    <div className="input">
                        <input
                            type="date"
                            className="input-details"
                            value={props.date}
                            onChange={props.Handel_onchange}
                        />
                    </div>
                    <div className="details-heading">Gender</div>
                    <div className="input">
                        <select
                            name="gender"
                            className="input-details"

                            onChange={props.Handel_onchange}
                        >
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Gay">Gay</option>
                            <option value="Bisxeual">Bisexual</option>
                        </select>
                    </div>
                    <div className="for-bac">
                        <div className="next">
                            {(props.name !== "" && props.date !== "" && props.gender !== "") ? <button className='next-button-enabled' type="submit" onClick={props.NextButton}>Next</button> : <button className='next-button' disabled type="submit" onClick={props.NextButton}>Next</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
