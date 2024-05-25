import axios from "axios"

async function createChatroom(chatroom) {
    try {
        const res = await axios.post('http://localhost:3000/message/createChatroom', {
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

async function addMessage() {
    try {
        
    } catch (error) {
        
    }
}

async function removeChatroom() {
    try {
        
    } catch (error) {
        
    }
}

async function getChatroomsByUserid(userid) {
    try {
        const res = await axios.post('http://localhost:3000/message/getChatroomsByUserid', {
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
    removeChatroom,
    getChatroomsByUserid,
}