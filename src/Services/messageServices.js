import axios from "axios"
import api from './axiosInstance';

async function createChatroom(chatroom) {
    try {
        const res = await api.post('/message/createChatroom', {
            chatroom: chatroom
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to create chatroom');
        return null;
    }
}

async function addMessage(message, chatroomid) {
    try {  
        const res = await api.post('/message/addMessage', {
            message: message,
            chatroomid: chatroomid
        });

        if (res.status === 200) {
            console.log('message added');
        }
    } catch (error) {
        alert('Failed to add message');
    }
}

async function addPhoto(message, chatroomid) {
    try {
        const res = await api.post('/message/addPhoto', {
            message: message,
            chatroomid: chatroomid
        });

        if (res.status === 200) {
            console.log('photo added');
        }
    } catch (error) {
        alert('Failed to send photo')
    }
}

async function removeChatroom(chatroomid) {
    try {
        const res = await api.post('/message/removeChatroom', {
            chatroomid: chatroomid
        });

        if (res.status === 200) {
            console.log('chatroom removed');
        }
    } catch (error) {
        alert('Failed to remove chatroom');
    }
}

async function getChatroomsByUserid(userid) {
    try {
        const res = await api.post('/message/getChatroomsByUserid', {
            userid: userid
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to get chatroom');
        return null;
    }
}

export {
    createChatroom,
    addMessage,
    addPhoto,
    removeChatroom,
    getChatroomsByUserid,
}