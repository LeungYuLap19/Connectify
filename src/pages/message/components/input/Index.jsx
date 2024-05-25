import React, { useContext, useRef, useState } from 'react'
import indexStyle from './index.module.css'
import { useSelector } from 'react-redux'
import { ChatroomContext } from '../../../../context/ChatroomContext';
import useChatroom from '../../hooks/useChatroom';

export default function Index() {
    const userData = useSelector(state => state.user.value.userData);
    const { clickedUser } = useContext(ChatroomContext);
    const messageRef = useRef(null);
    const { handleCreateChatroom } = useChatroom();

    const handleMessage = () => {
        if(messageRef.current.value) {
            const message = {
                fromUser: userData.id,
                toUser: clickedUser.id,
                message: messageRef.current.value,
                dateTime: new Date().toISOString(),
            }
            handleCreateChatroom(userData, clickedUser, message);
            messageRef.current.value = '';
        }
    }

    return (
        <div className={indexStyle['container']}>
            <input type="text" placeholder='Message...' ref={messageRef} />
            <button
                onClick={() => {
                    handleMessage();
                }}
            >
                <img src="\assets\images\send.png" alt="send" />
            </button>
        </div>
    )
}
