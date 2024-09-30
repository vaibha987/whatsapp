//Node server
//server
// const io = require('socket.io')(8000); //make a socket connection on port 8000

const io = require('socket.io')(8000);
//server
//with .on, we are doing event handling
//.on(event, callback)
const users = {};//server
io.on('connection', socket =>{//server
    socket.on('new-user-joined', name =>{
        console.log("New User", name); //IN TERMINAL log
        users[socket.id] = name; 
        //key value pair in object users. 
        socket.broadcast.emit('user-joined',name) //requesting the client to add this user by 
    });//server
//server
    socket.on('abcd',message=>{
        socket.broadcast.emit('receive',{message: message, name: users[socket.id]}) //server to client
    });//server
//server
//server
    // socket.on('disconnect',message=>{
    //     socket.broadcast.emit('left',users[socket.id]);
    //     delete users[socket.id];
    // });

})