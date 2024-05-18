import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ProfileContext } from '../../../../context/ProfileContext';

export default function Index({ post }) {
  const { setPostid } = useContext(ProfileContext);

  return (
    <div 
      className={indexStyle['post-item']}
      onClick={() => {
        setPostid(post.id);
      }}
    >
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
