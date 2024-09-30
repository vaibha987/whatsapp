const socket = io('http://localhost:8000') //connecting to Socket.io server at 8000
// I am telling client please connect with the socket server at port 8000
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
//client
const messageContainer= document.querySelector('.container');
//client

const append = (message, position) => {
    // console.log("Rishabh");
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    console.log(`Appended message: ${message}, Position: ${position}`);
}




//client
form.addEventListener('submit',(e)=>{
    e.preventDefault(); // Prevent form submission from reloading the page
    const message = messageInput.value; // Get the message from the input field
    append(`You: ${message}`, 'right'); // Display the message on the client-side UI
    socket.emit('abcd', message); // Emit an event named 'send' to the server with the message
    messageInput.value = ''; // Clear the input field after sending the message
})//client
//client
const name = prompt("Enter your name to join");
socket.emit('new-user-joined',name);  //where is it calling?? To whom is it calling
//client//client
socket.on('user-joined', name=>{ // socket.on is a method used to register event handlers for specific events
    append(`${name} joined the chat`, 'right' );
})//client
//client
socket.on('receive', data=>{
    append(`${data.name} :${data.message}`, 'left');
})//client

// Direction: .on is used to listen for incoming events, while .emit is used to send events.
// Parameters: .on takes an event name and a callback function, whereas .emit takes an event name and optional data to send.
// Use Case: .on is used to handle events received from the other party, while .emit is used to trigger events and send data to the other party.