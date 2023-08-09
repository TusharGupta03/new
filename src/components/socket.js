import { io } from 'socket.io-client';
let connection = null


export const sockets = async () => {
    if (!connection) {

        connection = io(`${process.env.REACT_APP_API_URL}`, {
            withCredentials: true,
            transports: ['websocket', 'polling']
        })

        connection.emit("make_user_online")

    }


    return connection


}

export const setnull = async () => {

console.log(`before ${connection}`)
connection = null
console.log(`after ${connection}`)

}

