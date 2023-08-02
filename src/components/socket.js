import { io } from 'socket.io-client';
let connection = null


export const sockets = async () => {
    if (!connection) {

        connection = io("https://backend-50ji.onrender.com", {
            withCredentials: true,
            transports: ['websocket', 'polling']
        })

        connection.emit("make_user_online")

    }


    return connection


}

export const setnull = async () => {

    connection = null

}

