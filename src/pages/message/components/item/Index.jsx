import React from 'react'
import indexStyle from './index.module.css';
import DateTag from '../../../../common/components/dateTag/Index';

export default function Index({ chatroom }) {
  return (
    <div className={indexStyle['container']}>
        <img src="\assets\images\default-icon.png" alt="user-icon" />
        <div className={indexStyle['right']}>
          <p className={indexStyle['username']}>{chatroom.user.username}</p>
          <div className={indexStyle['preview']}>
            <p className={indexStyle['message']}>{chatroom.messages[0].message}</p>
            <DateTag isCreatePost={false} dateTime={chatroom.lastTime}/>
          </div>
        </div>
    </div>
  )
}
