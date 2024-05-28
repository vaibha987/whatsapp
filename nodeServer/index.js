//Node server
const io = require('socket.io')(8000)

const users = {};
io.on('connection',socket =>{
    socket.on('user-defined',name =>{
        user[socket.id] = name;
    })
})