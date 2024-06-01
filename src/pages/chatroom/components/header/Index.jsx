import React, { useContext, useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import UserTag from '../../../../common/components/userTag/Index';
import useChatroomHooks from '../../hooks/useChatroomHooks';

export default function Index({ user }) {
  const { state, dispatch } = useContext(ChatroomContext); 
  const [more, setMore] = useState(false);
  const { handleRemoveChatroom } = useChatroomHooks();
  const [window, setWindow] = useState(false);

  return (
    <>
      <div className={indexStyle['container']}>
        <UserTag userData={user} clickable={true} />
        { 
          state.clickedData.id && 
          <img 
          onClick={() => setMore(!more)}
          className={`${indexStyle['more']} ${more ? indexStyle['clicked'] : ''}`} 
          src={more ? '/assets/images/close.png' : '/assets/images/more.png'} alt="more" />
        }
      </div>

      <button 
      onClick={async () => {
        setWindow(true);
      }}
      className={`${indexStyle['delete']} ${more ? indexStyle['show'] : ''}`}>
          <img src="/assets/images/trash.png" alt="delete" />
          <p>Delete chatroom</p>
      </button>

      { window &&
      <div className={indexStyle['confirm']}>
        <div className={indexStyle['confirm-container']}>
          <h3>Delete chatroom?</h3>
          <p>It will delete this chatroom for both of you permanently.</p>
          <div className={indexStyle['buttons']}>
            <button className={indexStyle['del-btn']}
              onClick={ async () => {
                setWindow(false);
                setMore(false);
                dispatch({ type: 'setDone', payload: true });
                await handleRemoveChatroom(user, state.clickedData.id);
                setTimeout(() => {
                  dispatch({ type: 'setDone', payload: false });
                }, 2500);
              }}
            >Delete</button>
            <button className={indexStyle['cancel-btn']}
              onClick={() => {
                setWindow(false);
                setMore(false);
              }}
            >Cancel</button>
          </div>
        </div>
      </div> }
    </> 
  )
}