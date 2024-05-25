import React, { useContext } from 'react'
import indexStyle from './index.module.css'
import Header from '../header/Index';
import Record from '../record/Index';
import Input from '../input/Index';
import { ChatroomContext } from '../../../../context/ChatroomContext';

export default function Index() {
  const { clickedUser } = useContext(ChatroomContext);

  return (
    <div className={indexStyle['container']}>
      {
        clickedUser &&
        <>
          <div className={indexStyle['header']}>
            <Header clickedUser={clickedUser.messages ? clickedUser.user : clickedUser} />
          </div>
          <div className={indexStyle['record']}>
            <Record />
          </div>
          <div className={indexStyle['input']}>
            <Input />
          </div>
        </>
      }
    </div>
  )
}
