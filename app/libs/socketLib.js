/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const shortid = require('shortid');
const events = require('events');

const tokenLib = require("./tokenLib.js");




let setServer = (server) => {

    let io = socketio.listen(server);

    let myIo = io.of('/')

    myIo.on('connection', (socket) => {

        console.log("on connection--emitting verify user");

       // socket.emit("verifyUser", "");    


        socket.on('disconnect', () => {

            console.log("user is disconnected");           

        }) 


        socket.on('notify-updates', () => {
            socket.broadcast.emit("updates", "view updated");
        });

    });
}

module.exports = {
    setServer: setServer
}