import React, { useContext, useState } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import UserTag from '../../../../common/components/userTag/Index';
import useChatroomHooks from '../../hooks/useChatroomHooks';

export default function Index({ user }) {
  const { state } = useContext(ChatroomContext); 
  const [more, setMore] = useState(false);
  const { handleRemoveChatroom } = useChatroomHooks();

  return (
    <>
      <div className={indexStyle['container']}>
        <UserTag userData={user} clickable={true} />
        { 
          state.clickedData.id && 
          <img 
          onClick={() => setMore(!more)}
          className={`${indexStyle['more']} ${more ? indexStyle['clicked'] : ''}`} 
          src="\assets\images\more.png" alt="more" />
        }
      </div>

      <button 
      onClick={() => handleRemoveChatroom(user, state.clickedData.id)}
      className={`${indexStyle['delete']} ${more ? indexStyle['show'] : ''}`}>
          <img src="/assets/images/trash.png" alt="delete" />
          <p>Delete chatroom</p>
      </button>
    </>
    
  )
}