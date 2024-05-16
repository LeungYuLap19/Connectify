import React from 'react'
import indexStyle from './index.module.css';

export default function Index({ post }) {
  return (
    <div className={indexStyle['post-item']}>
        <img src={post.photo[0]} alt="post-image" />
        <div className={indexStyle['layer']}>
            <div className={indexStyle['like']}>
                <p>{post.likes.length}</p>
                <img src="/assets/images/like1.png" alt="like" />
            </div>
            <div className={indexStyle['comment']}>
                <p>{post.comments.length}</p>
                <img src="/assets/images/comment1.png" alt="comment" />
            </div>
        </div>
    </div>
  )
}
