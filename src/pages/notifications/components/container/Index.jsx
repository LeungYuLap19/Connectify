import React from 'react'
import indexStyle from './index.module.css'
import { useSelector } from 'react-redux'
import useClear from '../../hooks/useClear';
import Notification from '../notification/Index';

export default function Index() {
  const notificationsData = useSelector(state => state.notifications.value.notificationsData);
  const userData = useSelector(state => state.user.value.userData);
  const { useClearAll } = useClear();

  return (
    <div className={indexStyle['container']}>
      <div className={indexStyle['header']}>
        <h1>Notifications</h1>
        <button
          className={indexStyle['clear-all']}
          onClick={() => {useClearAll(userData.id)}}
        >Clear All</button>
      </div>
      
      {
        notificationsData.map((notification, index) => {
          return (
            <Notification notification={notification} index={index} key={index} />
          );
        })
      }
    </div>
  )
}
