import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ClickedContext } from './../../../context/ClickedContext';
import ProfilePage from '../../../pages/profile/components/container/Index'

export default function Index({ clickable = false , userData }) {

    const { setItemClickedM } = useContext(ClickedContext);

    return (
        <div 
            className={indexStyle['container']}
            onClick={() => {
                if (clickable) {
                    setItemClickedM({name: '', icon: '', component: <ProfilePage userData={userData} />});
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
