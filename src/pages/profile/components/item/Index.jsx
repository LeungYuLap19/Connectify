import React from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';

export default function Index({ userData, setPopup, setList }) {
  return (
    <div className={indexStyle['container']}>
        <div 
        className={indexStyle['wrapper']}
        onClick={() => {
            setPopup(false);
            setList(null);
        }}>
            <UserTag clickable={true} userData={userData} />
        </div>
    </div>
  )
}
