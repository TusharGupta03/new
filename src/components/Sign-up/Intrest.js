import React from 'react'

export default function Intrest(props) {
  return (
    <>
      <div className="sign-Up-Intrest">
        <div className="heading">Select Your Intrest</div>
        <div className="intrest">
          <button className="intrest-button" onClick={props.intrest_handel}>
            traveling
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            exercise
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            going to the theater
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            dancing
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            cooking
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            doing stuff outdoors
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            politics
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            pets
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            photography
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            sports
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            art
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            learning
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            music
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            movies
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            fishing
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            gardening
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            swimming
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            astrology
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            hiking
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            foodie
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            writer
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            netflix
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            resding
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            racing
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            serial lover
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            golf
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            dog loer
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            pet lover
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            museum
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            vlogging
          </button>
          <button className="intrest-button" onClick={props.intrest_handel}>
            yoga
          </button>
          {/* <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button>
                            <button className='intrest-button' onClick={props.intrest_handel}>Racing</button> */}
        </div>

        <div className="for-bac">
          <div className="next-intrest">
            {(props.intrestarr.length >= 5 ) ? <button className='next-button-enabled' type="submit" onClick={props.NextButton}>Next</button> : <button className='next-button' disabled type="submit" onClick={props.NextButton}>Next</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}
