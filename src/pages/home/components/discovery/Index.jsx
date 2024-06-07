import React from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';
import { useSelector } from 'react-redux';
import Weather from '../weather/Index';

export default function Index() {
    const discoverUsers = useSelector(state => state.discovery.value.discoverUsers);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['weather']}>
                <Weather />
            </div>
            
            <div className={indexStyle['users']}>
                <p>Suggested for you</p>
                {
                    discoverUsers.map((userData, index) => {
                        return (
                            <div className={indexStyle['item']}> 
                                <UserTag key={index} userData={userData} clickable={true} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
