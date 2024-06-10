import { useDispatch, useSelector } from "react-redux";
import { ChatroomContext } from "../../../context/ChatroomContext"
import { getUser, searchUsernames } from "../../../Services/userServices";
import { useContext } from "react";
import { addMessage, addPhoto, createChatroom, removeChatroom } from "../../../Services/messageServices";
import { chatroomRemove, storeChatroom, storeMessage } from '../../../store/slices/chatroomsSlice';
import socket from "../../../Services/socketConfig";

const useChatroomHooks = () => {
    const { state, dispatch } = useContext(ChatroomContext);
    const userData = useSelector(state => state.user.value.userData);
    const chatroomsData = useSelector(state => state.chatrooms.value.chatroomsData);
    const reduxDispatch = useDispatch();

    const searchUser = async (input) => {
        const data = await searchUsernames(input);
        if (data && data.data.length > 0) {
            const results = { followings: [], others: [] };
            data.data.forEach(user => {
                if(user.id !== userData.id && !checkInChatrooms(user.id)) {
                    userData.followings.includes(user.id) ? 
                    results.followings.push(user) : 
                    results.others.push(user);
                }
            });
            dispatch({ type: 'setSearchResults', payload: results });
        }
        else {
            dispatch({ type: 'setSearchResults', payload: null });
        }
    }

    const checkInChatrooms = (userid) => {
        return chatroomsData.some(chatroom => {
            const index = chatroom.users.findIndex(user => user.id === userid);
            return index !== -1;
        });
    }

    const setNewChatroom = (user) => {
        const chatroom = {
            id: null,
            users: [{id: userData.id, username: userData.username, icon: userData.icon}, {id: user.id, username: user.username, icon: user.icon}],
            lastTime: null,
            messages: [],
        }
        dispatch({ type: 'setClickedData', payload: chatroom })
    }

    const getUserByid = async (userid, setUser) => {
        const data = await getUser(userid);
        setUser(data.data);
    }

    const createNewChatroom = async (user, content, isPhoto = false) => {
        const newMessage = {
            fromUser: userData.id,
            toUser: user.id,
            dateTime: new Date().toISOString(),
        }

        isPhoto ? newMessage.photo = content : newMessage.message = content;

        const newChatroom = { ...state.clickedData, messages: [newMessage], lastTime: newMessage.dateTime };
        const data = await createChatroom(newChatroom);
        newChatroom.id = data.data;
        socket.emit('chatroom', newChatroom);
        dispatch({ type: 'setClickedData', payload: newChatroom });
        reduxDispatch(storeChatroom([newChatroom]));
        return newChatroom.id;
    }

    const handleRemoveChatroom = async (user, chatroomid) => {
        await removeChatroom(chatroomid);
        socket.emit('chatroomRemoved', { toUser: user.id, chatroomid: chatroomid });
        reduxDispatch(chatroomRemove(chatroomid));
    }

    const handleSendMessage = async (chatroomid, user, message) => {
        const newMessage = {
            fromUser: userData.id,
            toUser: user.id,
            message: message,
            dateTime: new Date().toISOString(),
        }
        await addMessage(newMessage, chatroomid);
        socket.emit('message', { message: newMessage, chatroomid: chatroomid });
        reduxDispatch(storeMessage({ message: newMessage, chatroomid: chatroomid }));
    }

    const handleSendPhoto = async (chatroomid, user, photo) => {
        const newMessage = {
            fromUser: userData.id,
            toUser: user.id,
            photo: photo,
            dateTime: new Date().toISOString()
        }

        await addPhoto(newMessage, chatroomid);
        socket.emit('message', { message: newMessage, chatroomid: chatroomid });
        reduxDispatch(storeMessage({ message: newMessage, chatroomid: chatroomid }));
    }

    return { searchUser, setNewChatroom, getUserByid, 
        createNewChatroom, handleRemoveChatroom, handleSendMessage,
        handleSendPhoto };
}

export default useChatroomHooks;