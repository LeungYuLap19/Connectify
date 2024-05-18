import React, { useRef } from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';
import useAddComment from '../../hooks/useAddComment';

export default function Index() {
    const commentRef = useRef(null);
    const userData = useSelector((state) => state.user.value.userData);

    const { addPostComment } = useAddComment();
    const addComment = () => {
        if (commentRef.current.value) {
            const comment = {
                userid: userData.id,
                comment: commentRef.current.value,
                commentTime: new Date().toISOString(),
            };
            addPostComment(comment);
            commentRef.current.value = '';
        }
    }

    return (
        <div className={indexStyle['container']}>
                <input type="text" placeholder='comment...' ref={commentRef}/>
                <button onClick={addComment}>
                    <img src="\assets\images\send.png" alt="comment-btn" />
                </button>
        </div>
    )
}
