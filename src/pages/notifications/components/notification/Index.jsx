import React from 'react'
import indexStyle from './index.module.css'
import UserTag from '../../../../common/components/userTag/Index';
import useClear from '../../hooks/useClear';
import DateTag from '../../../../common/components/dateTag/Index';

export default function Index({ notification, index }) {
    const { useClearOne } = useClear();

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['left']}>
                <div className={indexStyle['header']}>
                    <UserTag userData={notification.fromUser} clickable={false}/>
                    <p>{notification.message}.</p>
                    <DateTag dateTime={notification.dateTime} isCreatePost={false}/>
                </div>
                { notification.comment && <p className={indexStyle['comment']}>{notification.comment}</p> }
            </div>
            <button
                onClick={() => {
                    useClearOne(notification.id, index);
                }} 
            >Remove</button>
        </div>
    )
}
