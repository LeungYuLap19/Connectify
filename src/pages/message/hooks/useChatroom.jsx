import { io } from "socket.io-client";
import { createChatroom } from "../../../Services/messageServices";
import { storeChatroom } from '../../../store/slices/chatroomsSlice';
import { useDispatch } from "react-redux";

const useChatroom = () => {
    const socket = io('http://localhost:3001');
    const dispatch = useDispatch();

    const handleCreateChatroom = async (user1, user2, message) => {
        const chatroom = {
            users: [{id: user1.id, username: user1.username}, {id: user2.id, username: user2.username}],
            lastTime: message.dateTime,
            messages: [
                message,
            ]
        }
        const data = await createChatroom(chatroom);
        chatroom.id = data.data;
        socket.emit('chatroom', chatroom);
        dispatch(storeChatroom([chatroom]));
    }

    // ...more

    return { handleCreateChatroom }
}

export default useChatroom;