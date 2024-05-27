import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import { useSelector } from 'react-redux';
import DateTag from '../../../../common/components/dateTag/Index';

export default function Index() {
  const { state } = useContext(ChatroomContext);
  const userData = useSelector(state => state.user.value.userData);

  return (
    <div className={indexStyle['container']}>
      {
        state.clickedData.messages.map((message, index) => {
          return (
            <div className={`${indexStyle['item']} ${message.fromUser === userData.id ? indexStyle['my'] : ''}`} key={index}>
              <img src="\assets\images\default-icon.png" alt="user-icon" />
              <div className={indexStyle['message']}>
                <p className={indexStyle['text']}>{message.message}</p>
                <DateTag dateTime={message.dateTime} isCreatePost={false}/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}