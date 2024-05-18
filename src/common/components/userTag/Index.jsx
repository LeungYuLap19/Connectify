import React from 'react'
import indexStyle from './index.module.css';

export default function Index({ clickable, userData }) {

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['profile-icon']}>
                <img src="/assets/images/default-icon.png" alt="user-icon" />
            </div>
            <span>{!clickable ? userData.username : ''}</span>
        </div>
    )
}
