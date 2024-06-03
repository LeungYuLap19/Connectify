import React, { useContext, useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import useChatroomHooks from '../../hooks/useChatroomHooks';
import DateTag from '../../../../common/components/dateTag/Index';
import { useSelector } from 'react-redux';

export default function Index() {
  const { state, dispatch } = useContext(ChatroomContext);
  const { setNewChatroom } = useChatroomHooks();
  const [localData, setLocalData] = useState([]);
  const [type, setType] = useState(null);
  const userData = useSelector(state => state.user.value.userData);

  useEffect(() => {
    if (state.searchResults) {
      setLocalData(state.selectedButton === 'followings' ? state.searchResults.followings : state.searchResults.others);
      setType(0);
    } else if (state.chatrooms) {
      setLocalData(state.selectedButton === 'followings' ? state.chatrooms.followings : state.chatrooms.others);
      setType(1);
    } else {
      setLocalData([]);
    }
  }, [state.selectedButton, state.searchResults, state.chatrooms]);
  
  return (
    <div className={indexStyle['container']}>
      {
        type == 0 ?
        localData.map((user, index) => {
          return (
            <div 
            onClick={() => {
              setNewChatroom(user);
              state.inputRef.current.value = '';
              dispatch({ type: 'setSearchResults', payload: null });
            }}
            key={index} className={indexStyle['item']}>
              <UserTag clickable={false} userData={user} />
            </div>
          )
        }) :
        localData.map((chatroom, index) => {
          const user = chatroom.users.find(user => user.id !== userData.id);
          return (
            <div 
            onClick={() => dispatch({ type: 'setClickedData', payload: chatroom })}
            key={index} className={indexStyle['item']}>
              <div className={indexStyle['wrapper']}>
                <img src="\assets\images\default-icon.png" alt="user-icon" />
                <div className={indexStyle['right']}>
                  <p className={indexStyle['username']}>{user.username}</p>
                  <div className={indexStyle['preview']}>
                    <p className={indexStyle['message']}>{chatroom.messages?.[chatroom.messages.length - 1]?.message || 'sent a photo'}</p>
                    <DateTag isCreatePost={false} dateTime={chatroom.lastTime}/>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}