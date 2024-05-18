import { useContext } from 'react';
import indexStyle from './index.module.css';
import { ProfileContext } from '../../../../context/ProfileContext';

export default function Index() {

    const { userData, posts } = useContext(ProfileContext);
    
    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['profile-icon']}>
                <img src="/assets/images/default-icon.png" alt="user-icon" />
            </div>
            <h1>Hello, {userData.username} 👋</h1>
            <div className={indexStyle['info']}>
                <div>
                    <p>{posts ? posts.length : '0'}</p>
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
