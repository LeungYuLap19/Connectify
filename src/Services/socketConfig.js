import { io } from "socket.io-client";

const socket = io('http://localhost:3001', {
    transports: ['websocket', 'polling'],
    reconnectionAttempts: 5, 
    reconnectionDelay: 1000, 
});

export default socket;
