import React from 'react'
import indexStyle from './index.module.css'
import UserTag from '../../../../common/components/userTag/Index';
import useClear from '../../hooks/useClear';
import DateTag from '../../../../common/components/dateTag/Index';
import useOpenPost from '../../hooks/useOpenPost';

export default function Index({ notification, index, setPostData }) {
    const { useClearOne } = useClear();
    const { getPost } = useOpenPost(setPostData);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['left']}>
                <div className={indexStyle['header']}>
                    <UserTag userData={notification.fromUser} clickable={true}/>
                    <p
                        onClick={() => {
                            notification.post && getPost(notification.post, setPostData);
                        }}
                    >{notification.message}.</p>
                    <DateTag dateTime={notification.dateTime} isCreatePost={false}/>
                </div>
                { notification.comment && <p className={indexStyle['comment']}
                    onClick={() => {
                        notification.post && getPost(notification.post, setPostData);
                    }}
                >{notification.comment}</p> }
            </div>
            <button
                onClick={() => {
                    useClearOne(notification.id, index);
                }} 
            >Remove</button>
        </div>
    )
}
