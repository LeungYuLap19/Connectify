import React, { useContext, useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';
import useToggleLike from '../../hooks/useToggleLike';
import { ProfileContext } from '../../../context/ProfileContext';

export default function Index() {
    const { posts, postid } = useContext(ProfileContext);
    const postData = posts.find((post) => post.id === postid);
    const postLikes = postData.likes;

    const [liked, setLiked] = useState(false);
    const userData = useSelector((state) => state.user.value.userData);
    const { toggleLike } = useToggleLike();

    useEffect(() => {
        if (postLikes.includes(userData.id)) {
            setLiked(true);
        }
        else {
            setLiked(false);
        }
    }, [postLikes]);

    return (
        <div className={indexStyle['container']}>
            <div 
                className={indexStyle['like']} 
                onClick={async () => {
                    await toggleLike(userData.id, postid);
                }}
            >
                <img src="\assets\images\heartOutline.png" alt="heartOutline" />
                <img 
                    className={`${indexStyle['heartFull']} ${liked ? indexStyle['popup'] : ''}`} 
                    src="\assets\images\heartFull.png" 
                    alt="heartFull" 
                />
            </div>

            <p>{postLikes.length} Likes</p>
        </div>
    )
}
