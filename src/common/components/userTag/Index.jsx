import React from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';

export default function Index({ clickable }) {
    const userData = useSelector((state) => state.user.value.userData);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['profile-icon']}>
                <img src="/assets/images/default-icon.png" alt="user-icon" />
            </div>
            <span>{!clickable ? userData.username : ''}</span>
        </div>
    )
}
