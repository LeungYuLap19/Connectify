import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { io } from "socket.io-client";
import { storeNotification } from "../../../store/slices/notificationsSlice";
import { storeChatroom } from '../../../store/slices/chatroomsSlice';

const useSocket = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.value.userData);

    useEffect(() => {
        const socket = io('http://localhost:3001');

        socket.emit('login', userData.id);

        socket.on('notification', (data) => {
            dispatch(storeNotification([data]));
        });

        socket.on('chatroom', (data) => {
            dispatch(storeChatroom([data]));
        });

        return () => {
            socket.emit('logout', userData.id);
        };
    }, [userData]);
}

export default useSocket;