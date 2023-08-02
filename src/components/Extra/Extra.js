import React from 'react'
import './extra.css'
import Confetti from 'react-confetti'
import heart from '../../images/heart3.png'
export default function Extra() {

  return (


    <>
      <div className="matched">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={1000}
          recycle={false}
        />

        <div className="matched-profile">
          <div className="user-image" id='user'>
            <div className="user">

            </div>
            <div className="mat-name">

            </div>
          </div>
          <div className="user-image" id='mat'>
            <div className="user">

            </div>
            <div className="mat-name">

            </div>
          </div>
          <div className="shpae-title">
            <div>


              <img src={heart} alt="" className='hear' />
            </div>
            <div className="title">
              Congratulation's You Have a Matched Profile
            </div>
          </div>
        </div>



      </div>

    </>
  )
}


// export default function Extra(props) {


//   function a() {
//     fetch('http://localhost:8000/dating/user/notification', {

//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       withCredentials: true,
//       credentials: 'include'
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         socket.emit("new_noti", 'i')




//       })
//   }
//   return (

//     <>
//       <button onClick={a}>hgsdhghs</button>




//     </>
//   )
// }




/* useEffect(() => {
    const onPageLoad = () => {
        setdisplay(false);
      };
  
      // Check if the page has already loaded
      if (document.readyState === 'complete') {
        onPageLoad();
      } else {
        window.addEventListener('load', onPageLoad);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad);
      }
  //   }, []);*/





  //   <div className="mess">
  //   <div className="content2">HI</div>
  // </div>
  // <div className="mess2">
  //   <div className="content3">HI2</div>
  // </div>