import React from 'react'
import Sidebar from './Sidebar'
import './Matches.css'
import verify from '../../images/verify.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import forward from '../../images/right-arrow.png'
import backward from '../../images/backward.png'
import Loader from '../Loader/Loader'
import heart_joint from '../../images/heart-joint.png'
import heart_break from '../../images/heart-broke.png'
import Matched from '../Matched/MAtched'

export default function Matches() {
  const broken = false
  const [matches, setmatches] = useState([])
  const [showmatched, setshowmatched] = useState(false)
  const [intrest, setintrest] = useState([])
  const [key, setkey] = useState(1)
  const [a, seta] = useState(false)
  const [i, seti] = useState(0)
  const [j, setj] = useState(0)
  const [display, setdisplay] = useState(true)
  const [accepts, setaccept] = useState(false)
  const [rejects, setreject] = useState(false)
  const [user_infor, setuser_infor] = useState({})


  useEffect(() => {
    console.log("a")
    fetch('http://localhost:8000/dating/matches/matched', {

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
          let new_arr = [...matches]
          new_arr = data.matched_profile
          setmatches(new_arr)
          setintrest(data.user_intrest)

          if (new_arr.length !== 0) {

            seta(true)
          }
          else {
            seta(false)
          }
        }
        else {

        }

        setdisplay(false)
      })
    // eslint-disable-next-line
  }, [])




  function age_convertor(e) {
    let today_date = new Date()
    let dob = new Date(e)
    let age = today_date.getFullYear() - dob.getFullYear()
    return age;
  }
  function calculateSimilarityPercentage(array1, array2) {
    const similarCount = array1.filter(element => array2.includes(element)).length;
    const percentage = (similarCount / Math.max(array1.length, array2.length)) * 100;
    return percentage.toFixed(2);
  }

  function send_seen() {

    const id = { id: matches[i]._id }
    fetch('http://localhost:8000/dating/matches/seened', {

      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess === true) {

          setreject(false)

        }

      })
  }

  function send_like() {
    const id = { id: matches[i]._id }
    fetch('http://localhost:8000/dating/matches/liked', {

      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      withCredentials: true,
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess === true) {
          if (data.code === "matched") {
            console.log(data.code)
            console.log("matched")
            setuser_infor(data.user)
            setshowmatched(true)
            setaccept(false)
            setreject(false)
          }
          else {
            console.log("notmatched")

            setaccept(false)
            setreject(false)
          }
        }

      })
  }
  function accept() {

    setaccept(true)
    send_seen()
    send_like()

    setj(0)
    if (i !== matches.length - 1) {
      setkey(key + 1)
      seti(i + 1)

    }
    else {
      seta(false)
    }

  }
  async function reject() {
    setreject(true)
    send_seen()
    setj(0)
    if (i !== matches.length - 1) {
      setkey(key + 1)
      seti(i + 1)

    }
    else {
      seta(false)
    }
  }

  function left() {
    if (j !== 0) {
      setj(j - 1)
    }

  }

  function right() {
    if (j !== matches[i].photo.length - 1) {
      setj(j + 1)
    }
  }




  // setInterval(() => {
  //   setBroken(!broken);



  // }, 10000);


  return (
    <>

      {display ? <Loader /> : null}
      {showmatched ? <Matched
        setshowmatched={setshowmatched}
        matcher={matches[i].name}
        matcher_image={matches[i].photo[0]}
        user={user_infor}

      /> : null}
      <div className="dashboard">
        <Sidebar />
        <div className="match-con">
          <div className="match-heading">
            Start Fnding Your Soulmate
          </div>

          <div className="profile-cont">
            {accepts ? <div className="ac-rec-loader" >
              <img src={heart_joint} alt="" className='joint' />
            </div> : null}
            {rejects ? <div className="ac-rec-loader" >
              <img src={heart_break} alt="" className='joint' />
            </div> : null}


            {a ? <>
              <div className="profile-images">
                <div className="left-image" onClick={left}>
                  <img src={backward} alt="" />
                </div>
                <div className="right-image" onClick={right}>
                  <img src={forward} alt="" />
                </div>
                <img key={key} src={a ? matches[i].photo[j] : null} alt="" className='im' />
              </div>
              <div key={key} className="profile-details">
                <div className="profile-name">
                  {a ? matches[i].name : null},{a ? age_convertor(matches[i].dob) : null} <img src={verify} alt="" className='verify' />
                </div>
                <div className="deta">
                  <div className="intrests">
                    {a ? matches[i].intrest.map((data, index) => {
                      return <div key={index} className="intrest-area" >
                        {data}
                      </div>
                    }) : null}

                  </div>
                  <div className='progress'>
                    <CircularProgressbar value={a ? calculateSimilarityPercentage(intrest, matches[i].intrest) : null} text={`${a ? calculateSimilarityPercentage(intrest, matches[i].intrest) : null}%`} styles={{
                      text: {
                        // Text color
                        fill: 'white',
                        // Text size
                        fontSize: '21px',
                        fontFamily: 'Pacifico, cursive'

                      },
                    }} />
                  </div>

                </div>

                <div className="accept-reject">

                  <div className='accept' onClick={accept} >
                    <FontAwesomeIcon
                      icon={broken ? faHeartBroken : faHeart}

                      size='4x'
                      color='white'
                    />
                    <div className="na">
                      Accept
                    </div>
                  </div>
                  <div className="sp">

                  </div>
                  <div className='reject' onClick={reject} >
                    <FontAwesomeIcon
                      icon={broken ? faHeart : faHeartBroken}

                      size='4x'
                      color='white'
                    />
                    <div className="na">
                      REject
                    </div>
                  </div>
                </div>

              </div>

            </>
              :

              <div className="no-profile">
                No More Profile's Is <br />
                Available For Now
              </div>
            }



          </div>
        </div>
      </div>
    </>
  )
}
