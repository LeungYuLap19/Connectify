import React from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';

export default function Index() {
    const user = useSelector((state) => state.user.value.userData);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['profile-icon']}>
                <img 
                src={user.icon ? user.icon : "/assets/images/default-icon.png"} 
                alt="user-icon" />
            </div>

            <div className={indexStyle['profile-text']}>
                <p>{user.username}</p>
                <span>{user.email}</span>
            </div>
        </div>
    )
}
