const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const app = express();
const httpserver = http.createServer(app);
const path = require('path');



app.get('/',(req,res) => {
    const options = {
        root : path.join(__dirname)
    }
    const filename = 'index.html'
    res.sendFile(filename,options)
})

const io = new Server(httpserver);
io.on('connection', (socket) => {
    console.log("user is connected")
    socket.on('disconnect', () => {
        console.log("user is disconnected")
    })
})

httpserver.listen(3000, () => {
    console.log("server is running on the port 3000")
})  