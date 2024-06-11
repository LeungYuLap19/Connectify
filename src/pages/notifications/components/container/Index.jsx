import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css'
import { useSelector } from 'react-redux'
import useClear from '../../hooks/useClear';
import Notification from '../notification/Index';
import PostWindow from '../../../../common/components/postWindow/Index';

export default function Index() {
  const notificationsData = useSelector(state => state.notifications.value.notificationsData);
  const userData = useSelector(state => state.user.value.userData);
  const { useClearAll } = useClear();
  const [ postData, setPostData ] = useState(null);

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
            <Notification setPostData={setPostData} notification={notification} index={index} key={index} />
          );
        })
      }
      { postData && <PostWindow postUser={postData[0].user} posts={postData} setPosts={setPostData} postid={postData[0].id} setPostid={setPostData}/> }
    </div>
  )
}
