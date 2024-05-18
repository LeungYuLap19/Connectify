import React, { useContext, useEffect } from 'react'
import indexStyle from './index.module.css';
import PhotoSwiper from '../photoSwiper/Index';
import Close from '../close/Index';
import UserTag from '../userTag/Index';
import Comment from '../comment/Index';
import Like from '../like/Index';
import CommentInput from '../commentInput/Index';
import { ProfileContext } from '../../../context/ProfileContext';

export default function Index() {
    const { userData, posts, postid, setPostid } = useContext(ProfileContext);
    const postData = posts.find((post) => post.id === postid);

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
                        <Close close={setPostid}/>
                    </div>

                    <div className={indexStyle['comments']}>
                        <div className={indexStyle['comment']}>
                            <Comment comment={{comment: postData.caption, commentTime: postData.postTime}} userData={userData}/>
                        </div>

                        {/* comments */}
                    </div>

                    <div className={indexStyle['likes']}>
                        <Like />
                    </div>

                    <div className={indexStyle['comment-input']}>
                        <CommentInput />
                    </div>
                </div>
            </div>
        </div>
    )
}
