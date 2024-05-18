import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';

export default function Index({ postLikes }) {
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        console.log(liked)
    }, [liked])

    return (
        <div className={indexStyle['container']}>
            <div 
                className={indexStyle['like']} 
                onClick={() => {
                    setLiked(!liked);
                }}
            >
                <img src="\assets\images\heartOutline.png" alt="heartOutline" />
                <img 
                    className={`${indexStyle['heartFull']} ${liked ? indexStyle['popup'] : ''}`} 
                    src="\assets\images\heartFull.png" 
                    alt="heartFull" 
                />
            </div>

            <p>{postLikes} Likes</p>
        </div>
    )
}
