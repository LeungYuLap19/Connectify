import { useDispatch, useSelector } from "react-redux";
import { ChatroomContext } from "../../../context/ChatroomContext"
import { getUser, searchUsernames } from "../../../Services/userServices";
import { useContext } from "react";
import { addMessage, createChatroom, removeChatroom } from "../../../Services/messageServices";
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
            console.log(index);
            return index !== -1;
        });
    }

    const setNewChatroom = (user) => {
        const chatroom = {
            id: null,
            users: [{id: userData.id, username: userData.username}, {id: user.id, username: user.username}],
            lastTime: null,
            messages: [],
        }
        dispatch({ type: 'setClickedData', payload: chatroom })
    }

    const getUserByid = async (userid, setUser) => {
        const data = await getUser(userid);
        setUser(data.data);
    }

    const createNewChatroom = async (user, message) => {
        const newMessage = {
            fromUser: userData.id,
            toUser: user.id,
            message: message,
            dateTime: new Date().toISOString(),
        }
        const newChatroom = { ...state.clickedData, messages: [newMessage], lastTime: newMessage.dateTime };
        const data = await createChatroom(newChatroom);
        newChatroom.id = data.data;
        socket.emit('chatroom', newChatroom);
        dispatch({ type: 'setClickedData', payload: newChatroom });
        reduxDispatch(storeChatroom([newChatroom]));
    }

    const handleRemoveChatroom = async (user, chatroomid) => {
        await removeChatroom(chatroomid);
        socket.emit('chatroomRemoved', { toUser: user.id, chatroomid: chatroomid });
        reduxDispatch(chatroomRemove(chatroomid));
        // dispatch({ type: 'setClickedData', payload: null });
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

        // const newChatroom = {...state.clickedData, messages: [...state.clickedData.messages, newMessage], lastTime: message.dateTime};
        // dispatch({ type: 'setClickedData', payload: newChatroom });
    }

    return { searchUser, setNewChatroom, getUserByid, 
        createNewChatroom, handleRemoveChatroom, handleSendMessage };
}

export default useChatroomHooks;