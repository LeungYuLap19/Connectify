import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';
import useToggleLike from '../../hooks/useToggleLike';
import useNotification from '../../hooks/useNotification';

export default function Index({ postData, posts, setPosts }) {
    const [liked, setLiked] = useState(false);
    const userData = useSelector((state) => state.user.value.userData);
    const { toggleLike, toggleLikeH } = useToggleLike();
    const { likeNotification } = useNotification();

    useEffect(() => {
        if (postData.likes.includes(userData.id)) {
            setLiked(true);
        }
        else {
            setLiked(false);
        }
    }, [postData.likes]);

    return (
        <div className={indexStyle['container']}>
            <div 
                className={indexStyle['like']} 
                onClick={() => {
                    !liked && likeNotification(userData, postData.user, postData);
                    posts && setPosts ? toggleLike(userData.id, postData.id, posts, setPosts) : toggleLikeH(userData.id, postData.id);
                }}
            >
                <img src="\assets\images\heartOutline.png" alt="heartOutline" />
                <img 
                    className={`${indexStyle['heartFull']} ${liked ? indexStyle['popup'] : ''}`} 
                    src="\assets\images\heartFull.png" 
                    alt="heartFull" 
                />
            </div>

            <p>{postData.likes.length} Likes</p>
        </div>
    )
}
