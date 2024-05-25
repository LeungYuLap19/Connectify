import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css'
import List from '../list/Index';
import Chat from '../chat/Index';
import { ChatroomContext } from './../../../../context/ChatroomContext';
import { useSelector } from 'react-redux';

export default function Index() {
  const [searchResult, setSearchResult] = useState(null);
  const [selectedButton, setSelectedButton] = useState('Following');
  const [clickedUser, setClickedUser] = useState(null);
  const [chatrooms, setChatrooms] = useState(null);
  const userData = useSelector(state => state.user.value.userData);
  const chatroomsData = useSelector(state => state.chatrooms.value.chatroomsData);

  useEffect(() => {
    const following = [];
    const others = [];
    chatroomsData.forEach(chatroom => {
      const user = chatroom.users.find(user => user.id !== userData.id);
      const updatedChatroom = {
        ...chatroom,
        user: user
      };
      delete updatedChatroom.users;
      if (userData.followings.includes(user.id)) {
        following.push(updatedChatroom);
      }
      else {
        others.push(updatedChatroom);
      }
    });
    setChatrooms({following: following, others: others});
  }, [chatroomsData]);

  useEffect(() => {
    console.log(chatrooms);
  }, [chatrooms]);

  return (
    <ChatroomContext.Provider 
    value={{searchResult, setSearchResult, 
    selectedButton, setSelectedButton,
    clickedUser, setClickedUser,
    chatrooms}}>
      <div className={indexStyle['container']}>
        <div className={indexStyle['list']}>
          <List />
        </div>

        <div className={indexStyle['chat']}>
          <Chat />
        </div>
      </div>
    </ChatroomContext.Provider>
    
  )
}
