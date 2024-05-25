import React, { useContext, useState } from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';

export default function Index({ clickedUser }) {
    const [more, setMore] = useState(false);

    return (
        <>
            <div className={indexStyle['container']}>
                <UserTag userData={clickedUser} clickable={true}/>
                <img 
                onClick={() => setMore(!more)}
                className={`${indexStyle['more']} ${more ? indexStyle['clicked'] : ''}`} 
                src="\assets\images\more.png" alt="more" />
            </div>

            <button className={`${indexStyle['delete']} ${more ? indexStyle['show'] : ''}`}>
                <img src="/assets/images/trash.png" alt="delete" />
                <p>Delete chatroom</p>
            </button>
        </>
    )
}
