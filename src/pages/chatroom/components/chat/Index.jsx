import React, { useContext, useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import { useSelector } from 'react-redux';
import useChatroomHooks from '../../hooks/useChatroomHooks';
import Header from '../header/Index';
import Input from '../input/Index';
import Record from '../record/Index';

export default function Index() {
  const { state } = useContext(ChatroomContext);
  const [user, setUser] = useState(null);
  const { getUserByid } = useChatroomHooks();
  const userData = useSelector(state => state.user.value.userData);

  useEffect(() => {
    if (state.clickedData) {
      const user = state.clickedData.users.find(user => user.id !== userData.id);
      getUserByid(user.id, setUser);
    }
  }, [state.clickedData]);

  return (
    <div className={indexStyle['container']}>
      {
        state.clickedData && user &&
        <>
          <div className={indexStyle['header']}>
            <Header user={user}/>
          </div>
          <div className={indexStyle['record']}>
            <Record user={user}/>
          </div>
          <div className={indexStyle['input']}>
            <Input user={user}/>
          </div>
        </>
      }
    </div>
  )
}