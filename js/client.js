const socket = io('http://localhost:8000')

const form = document.getElementById('send-container');
const message = document.getElementById('messageInp');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const messageContainer = document.querySelector('.container');
const Name = prompt("Enter your name to join");
socket.emit('new-user-joined',Name);

socket.on('user-joined', data=>{

})
