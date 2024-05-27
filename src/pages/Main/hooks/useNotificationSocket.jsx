import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeNotification } from "../../../store/slices/notificationsSlice";
import { chatroomRemove, storeChatroom, storeMessage } from '../../../store/slices/chatroomsSlice';
import socket from '../../../Services/socketConfig';

const useSocket = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.value.userData);

    useEffect(() => {
        if (!userData || !userData.id) return;

        socket.emit('login', userData.id);

        const handleNotification = (data) => {
            console.log(data);
            dispatch(storeNotification([data]));
        };

        const handleMessage = (data) => {
            console.log('message: ', data);
            dispatch(storeMessage({ message: data.message, chatroomid: data.chatroomid }));
        };

        const handleChatroom = (data) => {
            dispatch(storeChatroom([data]));
        };

        const handleChatroomRemoved = (data) => {
            dispatch(chatroomRemove(data));
        };

        socket.on('notification', handleNotification);
        socket.on('message', handleMessage);
        socket.on('chatroom', handleChatroom);
        socket.on('chatroomRemoved', handleChatroomRemoved);

        return () => {
            socket.emit('logout', userData.id);

            // Clean up the event listeners to avoid duplicate listeners
            socket.off('notification', handleNotification);
            socket.off('message', handleMessage);
            socket.off('chatroom', handleChatroom);
            socket.off('chatroomRemoved', handleChatroomRemoved);
        };
    }, [userData, dispatch]);
};

export default useSocket;