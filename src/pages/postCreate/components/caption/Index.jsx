import React, { useEffect, useRef } from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';
import DateTag from '../../../../common/components/dateTag/Index';

export default function Index({ post, setPost, handleCreatePost }) {
    const onCaptionChange = (e) => {
        setPost({...post, caption: e.target.value});
    };

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['header']}>
                <div className={indexStyle['header-user-date']}>
                    <UserTag clickable={false}/> 
                    <span className={indexStyle['dot']}>{'•'}</span>
                    <DateTag isCreatePost={true} dateTime={null}/>
                </div>
                <button 
                className={indexStyle['header-post']}
                onClick={handleCreatePost}
                >Post</button>
            </div>

            <div className={indexStyle['caption-input']}>
                <textarea 
                    placeholder='Write your caption...'
                    name="caption" 
                    rows={20}
                    onChange={onCaptionChange}
                />
            </div>
        </div>
    )
}
