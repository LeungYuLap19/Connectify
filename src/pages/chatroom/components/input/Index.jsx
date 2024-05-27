import React, { useContext, useRef } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import useChatroomHooks from '../../hooks/useChatroomHooks';

export default function Index({ user }) {
  const messageRef = useRef(null);
  const { state } = useContext(ChatroomContext);
  const { createNewChatroom, handleSendMessage } = useChatroomHooks();

  return (
    <div className={indexStyle['container']}>
      <input type="text" placeholder='Message...' ref={messageRef} />
        <button
            onClick={() => {
                if (messageRef.current.value) {
                  !state.clickedData.id ? createNewChatroom(user, messageRef.current.value):
                  handleSendMessage(state.clickedData.id, user, messageRef.current.value);
                  messageRef.current.value = '';
                }
            }}
        >
            <img src="\assets\images\send.png" alt="send" />
        </button>
    </div>
  )
}