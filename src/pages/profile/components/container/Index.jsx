import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import Info from '../info/Index'
import Posts from '../posts/Index'
import PostWindow from '../../../../common/components/postWindow/Index';

export default function Index({ userData }) {
  const [postData, setPostData] = useState(null);

  return (
    <div className={indexStyle['container']}>
      <div className={indexStyle['background']}>

      </div>

      <div className={indexStyle['profile']}>
        <div className={indexStyle['profile-info']}>
          <Info />
        </div>
        
        <div className={indexStyle['profile-posts']}>
          <Posts setPostData={setPostData}/>
        </div>
      </div>

      { postData && <PostWindow postData={postData} setPostData={setPostData} userData={userData}/> } 
    </div>
  )
}
