import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ClickedContext } from './../../../context/ClickedContext';
import ProfilePage from '../../../pages/profile/components/container/Index'
import { getUser } from '../../../Services/userServices';

export default function Index({ clickable = false , userData }) {

    const { setItemClickedM } = useContext(ClickedContext);

    return (
        <div 
            className={indexStyle['container']}
            onClick={async () => {
                if (clickable) {
                    const detailedUserData = await getUser(userData.id);
                    console.log(detailedUserData.data);
                    setItemClickedM({name: '', icon: '', component: <ProfilePage userData={detailedUserData.data} />});
                }                
            }}
        >
            <div className={indexStyle['profile-icon']}>
                <img 
                src={userData.icon ? userData.icon : "/assets/images/default-icon.png"} 
                alt="user-icon" />
            </div>
            <span>{userData.username}</span>
        </div>
    )
}
