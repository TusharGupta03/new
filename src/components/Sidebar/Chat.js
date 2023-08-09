import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import "./Chat.css";
import test from "../../images/Priya.jpg";
import { sockets } from "../socket";
import onlines from "../../images/online.png";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [chat_profiles, setchat_profiles] = useState([]);
  const [display, setdisplay] = useState(false);
  const [online, setonline] = useState([]);
  const [current_id, setid] = useState("");
  const [chat_refresher, setchatrefresher] = useState(0);
  const [chat_refresher2, setchatrefresher2] = useState(0);
  const [message, setmessage] = useState();
  const [messages, setmessages] = useState([]);
  const nav = useNavigate()

  const socket = useRef(null);
  const messConRef = useRef(null);

  const currentIdRef = useRef(current_id);
  currentIdRef.current = current_id;

  useEffect(() => {
    const matched_profile_chat = async () => {
      fetch(`https://backend-50ji.onrender.com/dating/matches/matchedchat`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        withCredentials: true,
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.sucess === true) {
            let newarr = [...chat_profiles];
            newarr = data.matched_chat_profile;
            setchat_profiles(newarr);
            setdisplay(true)
          } else {
            nav('/login')
          }
        });
    };
    matched_profile_chat();

    const fun = async () => {
      socket.current = await sockets();

      socket.current.emit("online_users");

      socket.current.on("online_users", async (data) => {
        let newarr = [...online];
        newarr = data;
        setonline(newarr);
      });
      socket.current.on("User_is_online", async (data) => {
        let newarr = [...online];
        newarr = data;
        setonline(newarr);
        setchatrefresher(chat_refresher + 1);
      });
      socket.current.on("user_disconnected", async (data) => {
        let newarr = [...online];
        newarr = data.online_users;
        setonline(newarr);
        setchatrefresher(chat_refresher + 1);
      });

      socket.current.on("new_message", (data) => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        let time = `${hours}.${minutes} ${ampm}`;


        let new_messa = <><div className="mess">
          <div className="content2">{data.message}</div>
          <div className="time-con">
            <div className="time">

              {time}
            </div>
          </div>

        </div></>

        console.log(`datafrom ${data.from}, to the ${currentIdRef.current}`)

        if (data.from === currentIdRef.current) {
          setmessages((m) => [...m, new_messa])

        }
        else {

          let c = document.getElementById(data.from).innerHTML
          console.log(c)
          if (c === "") {

            c = 1
          }
          else {
            c++
          }

          document.getElementById(data.from).innerHTML = c
        }





      });
    };
    fun();

    // eslint-disable-next-line
  }, []);





  useEffect(() => {
    messConRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);



  console.log(chat_profiles);

  const [url, seturl] = useState(test);
  const [name, setname] = useState("nothing");


  const messages_loader = async (data) => {

    const id = { id: data }
    await fetch(`https://backend-50ji.onrender.com/dating/chat/mess`, {
      method: "POST",
      body: JSON.stringify(id),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      withCredentials: true,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sucess === true) {

          let newarr = data.messages
          console.log(data)
          let new_arr = []

          // eslint-disable-next-line
          newarr.map((message) => {


            const date = new Date(message.createdAt);

            // Extract the time from createdAt
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;

            let time = `${hours}.${minutes} ${ampm}`;
            if (message.from === data.user) {


              let new_message = <><div className="mess2">
                <div className="content3">{message.message}</div>
                <div className="time-con">
                  <div className="time">

                    {time}
                  </div>
                </div>
              </div></>
              new_arr.push(new_message)
            }
            else {
              let new_message = <><div className="mess">
                <div className="content2">{message.message}</div>
                <div className="time-con">
                  <div className="time">

                    {time}
                  </div>
                </div>

              </div></>
              new_arr.push(new_message)
            }


          }

          )
          setmessages(new_arr)
        } else {
        }
      });



  }

  console.log(current_id)

  const handelonclick = (e) => {
    console.log(e.target.id);

    document.getElementById(chat_profiles[e.target.id]._id).innerHTML = ""


    setid(chat_profiles[e.target.id]._id);
    setname(chat_profiles[e.target.id].name);
    seturl(chat_profiles[e.target.id].photo[0]);
    setchatrefresher2(chat_refresher2 + 1);

    messages_loader(chat_profiles[e.target.id]._id)
  };

  const last = (id) => {
    console.log(id);
    let index = online.findIndex((obj) => obj.socket === id);
    console.log(index);
    if (index >= 0) {
      return online[index].last_seen;
    }
    return null;
  };

  function checker(data) {
    console.log(online);
    let fin = online.find((obj) => obj.socket === data);
    if (fin) {
      console.log(fin);
      if (fin.is_online === true) {
        return true;
      }
    }

    return false;
  }

  const send_message = async (e) => {
    socket.current = await sockets();

    const message_format = {
      to: current_id,
      message: message,
    };

    let newarr = [...messages]

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;



    let time = `${hours}.${minutes} ${ampm}`;

    let new_messa = <><div className="mess2">
      <div className="content3">{message}</div>
      <div className="time-con">
        <div className="time">

          {time}
        </div>
      </div>
    </div></>

    newarr.push(new_messa)
    setmessages(newarr)
    setmessage("")

    console.log(`curent id ${current_id}`)




    socket.current.emit("new_message", message_format);
  };

  const handelchange = async (e) => {
    setmessage(e.target.value);
  };


  const handelkeypress = e => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      send_message();
    }
  };


  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="chat-con">
          {display ? (
            <>
              <div className="chat-con-sidebar">
                <div className="head">Chat</div>
                <div className="mount" key={chat_refresher}>
                  {chat_profiles.map((data, index) => {
                    return (
                      <div className="chat" key={index}>
                        <div className="chat_image">
                          {checker(data._id) ? (
                            <>
                              {" "}
                              <div className="online_status">
                                <img src={onlines} alt="" className="online" />
                              </div>
                            </>
                          ) : null}

                          <img src={data.photo[0]} className="image" alt="" />
                        </div>
                        <div className="chat-name">
                          <div
                            className="chat_name"
                            id={index}
                            onClick={handelonclick}
                          >
                            {data.name}
                          </div>
                          <div className="notify" >
                            <div className="number" id={data._id}>

                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : <Loader />}

          <div className="chat-section">
            <div className="chat-bar">
              <div className="chat_bar_image">
                <img src={url} className="bar_image" alt="" />
              </div>
              <div className="status-bar">
                <div className="chat-bar-name">{name}</div>
                <div key={chat_refresher2} className="online-not">
                  {checker(current_id)
                    ? "Online"
                    : `Last seen ${last(current_id)}`}
                </div>
              </div>
            </div>
            <div className="chat-area">
              <div className="messages">

                <div className="mess-con">
                  {messages}
                  <div ref={messConRef} />
                </div>
              </div>

              <div className="send_message">
                {currentIdRef.current !== "" ? <>  <input
                  type="text"
                  className="send"
                  placeholder="Type Here"
                  value={message}
                  onKeyDown={handelkeypress}
                  onChange={handelchange}
                /></> : null}

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
