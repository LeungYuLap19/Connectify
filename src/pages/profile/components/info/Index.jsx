import { useContext, useState } from 'react';
import indexStyle from './index.module.css';
import { ProfileContext } from '../../../../context/ProfileContext';
import useToggleFollow from '../../hooks/useToggleFollow';
import { useSelector } from 'react-redux';
import useNotification from '../../../../common/hooks/useNotification';
import Popup from '../popup/Index';
import { getListUsers } from '../../../../Services/userServices';

export default function Index() {
    const userData = useSelector((state) => state.user.value.userData);
    const { localUser, posts } = useContext(ProfileContext);
    const { toggleFollow } = useToggleFollow();
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const { followNotification } = useNotification();

    const [popup, setPopup] = useState(false);
    const [list, setList] = useState(null);
    
    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['profile-icon']}>
                <img src="/assets/images/default-icon.png" alt="user-icon" />
                {userData.id !== localUser.id && 
                    <button
                        className={`${indexStyle['profile-icon']} ${indexStyle['button']} 
                        ${localUser.followers.includes(userData.id) ? indexStyle['followed'] : ''}
                        ${isButtonClicked ? indexStyle['animate'] : ''}`}
                        onClick={() => {
                            !localUser.followers.includes(userData.id) && followNotification(userData, localUser);
                            toggleFollow(localUser.id, userData.id);
                            setIsButtonClicked(true);
                            setTimeout(() => {
                                setIsButtonClicked(false);
                            }, 500)
                        }}
                    >
                        <img src="\assets\images\connect.png" alt="follow-btn" />
                    </button>
                } 
            </div>
            <h1>Hello, {localUser.username} 👋</h1>
            <div className={indexStyle['info']}>
                <div>
                    <p>{posts ? posts.length : '0'}</p>
                    <p>Posts</p>
                </div>
                <div 
                onClick={async () => {
                    const listUsers = await getListUsers(localUser.followers);
                    setPopup(true);
                    setList(listUsers.data);
                }}>
                    <p>{localUser.followers.length}</p>
                    <p>Followers</p>
                </div>
                <div 
                onClick={async () => {
                    const listUsers = await getListUsers(localUser.followings);
                    setPopup(true);
                    setList(listUsers.data);
                }}>
                    <p>{localUser.followings.length}</p>
                    <p>Followings</p>
                </div>
            </div>

            {
                popup && list && 
                <div className={indexStyle['popup']}>
                    <Popup setPopup={setPopup} setList={setList} list={list} />
                </div>
            }
        </div>
    )
}
