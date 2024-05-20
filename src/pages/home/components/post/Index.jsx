import React from 'react'
import indexStyle from './index.module.css'
import UserTag from '../../../../common/components/userTag/Index';
import PhotoSwiper from '../../../../common/components/photoSwiper/Index';
import DateTag from '../../../../common/components/dateTag/Index'
import Like from '../../../../common/components/like/Index';
import CommentInput from '../../../../common/components/commentInput/Index';

export default function Index({ postData, setPostid }) {
    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['header']}>
                <UserTag clickable={true} userData={postData.user} />
                <span className={indexStyle['dot']}>{'•'}</span>
                <DateTag isCreatePost={false} dateTime={postData.postTime}/>
            </div>

            <div className={indexStyle['photo']}>
                <PhotoSwiper photos={postData.photo}/>
            </div>

            <div className={indexStyle['likes']}>
                <Like postData={postData} />
            </div>

            <div className={indexStyle['caption']}>
                <p><span>{postData.user.username}</span> {postData.caption}</p>
            </div>

            <div className={indexStyle['comments']}>
                <p
                    onClick={()=> {
                        setPostid(postData.id)
                    }}
                >{postData.comments.length > 0 ? `View all ${postData.comments.length} comments` : 'View more'}</p>
            </div>

            <div className={indexStyle['comment']}>
                <CommentInput postid={postData.id}/>
            </div>
        </div>
    )
}
