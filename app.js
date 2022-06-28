const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

http.listen(3000,()=>{
    console.log('Listening to Port');
});
const users = [];
const messages = [];
io.on('connection',(socket)=>{
    socket.on('newUser',(data)=>{
        users.push({
            id:socket.id,
            name:data
        });
        io.emit('users',users)
    })

    socket.on('sendMessage',(data)=>{
        messages.push({
            id:socket.id,
            message:data.message,
            sender:data.sender
        })
        io.emit('messages',messages)
    })
})
