import React, { useEffect } from 'react'
import indexStyle from './index.module.css';
import PhotoSwiper from '../photoSwiper/Index';
import Close from '../close/Index';
import UserTag from '../userTag/Index';
import Comment from '../comment/Index';
import Like from '../like/Index';
import DateTag from '../dateTag/Index';
import CommentInput from '../commentInput/Index';

export default function Index({ postData, setPostData, userData }) {

    return (
        <div 
            className={indexStyle['wrapper']}
        >
            <div className={indexStyle['container']}>
                <div className={indexStyle['photo']}>
                    <PhotoSwiper photos={postData.photo}/>
                </div>
                <div className={indexStyle['panel']}>
                    <div className={indexStyle['header']}>
                        <UserTag clickable={false} userData={userData} />
                        <Close close={setPostData}/>
                    </div>

                    <div className={indexStyle['comments']}>
                        {/* for caption */}
                        <div className={indexStyle['comment']}>
                            {/* for testing */}
                            <Comment comment={{comment: postData.caption, commentTime: postData.postTime}} userData={userData}/>
                        </div>
                    </div>

                    <div className={indexStyle['likes']}>
                        <Like postLikes={postData.likes.length}/>
                    </div>

                    <div className={indexStyle['comment-input']}>
                        <CommentInput />
                    </div>
                </div>
            </div>
        </div>
    )
}
