import React from 'react'
import indexStyle from './index.module.css';
import UserTag from '../userTag/Index';
import DateTag from '../dateTag/Index';

export default function Index({ userData, comment }) {
  return (
    <div className={indexStyle['container']}>
        <div className={indexStyle['header']}>
            <UserTag clickable={false} userData={userData}/>
            <span className={indexStyle['dot']}>{'•'}</span>
            <DateTag isCreatePost={false} dateTime={comment.commentTime} />
        </div>

        <div className={indexStyle['comment']}>
            <p>{comment.comment}</p>
        </div>
    </div>
  )
}
