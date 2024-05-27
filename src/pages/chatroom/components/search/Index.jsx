import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import useChatroomHooks from '../../hooks/useChatroomHooks';

export default function Index() {
  const { dispatch } = useContext(ChatroomContext);
  const { searchUser } = useChatroomHooks();

  const handleOnChange = (input) => {
    if(input) {
      searchUser(input);
    }
    else {
      dispatch({ type: 'setSearchResults', payload: null });
    }
  }

  return (
    <div className={indexStyle['container']}>
      <input 
      type="search" placeholder='Search user'
      onChange={(e) => handleOnChange(e.target.value.trim())}/>
    </div>
  )
}