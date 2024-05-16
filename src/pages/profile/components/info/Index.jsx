import React from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';

export default function Index() {
    const userData = useSelector((state) => state.user.value.userData);
    const postsData = useSelector((state) => state.posts.value.postsData);
    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['profile-icon']}>
                <img src="/assets/images/default-icon.png" alt="user-icon" />
            </div>
            <h1>Hello, {userData.username} 👋</h1>
            <div className={indexStyle['info']}>
                <div>
                    <p>{postsData.length}</p>
                    <p>Posts</p>
                </div>
                <div>
                    <p>{userData.followers.length}</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p>{userData.followings.length}</p>
                    <p>Followings</p>
                </div>
            </div>
        </div>
    )
}
