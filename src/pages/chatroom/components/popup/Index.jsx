import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';

export default function Index({ photo }) {
    const { dispatch } = useContext(ChatroomContext);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['photo']}>
                <img src={photo} alt="full-scale-photo" />
                <button onClick={() => dispatch({ type: 'setPopup', payload: null })}>
                    <img src="\assets\images\close.png" alt="close" />
                </button>
            </div>
        </div>
    )
}
