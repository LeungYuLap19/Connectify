import React, { useRef } from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';
import useAddComment from '../../hooks/useAddComment';
import useNotification from '../../hooks/useNotification';

export default function Index({ postData, posts, setPosts }) {
    const commentRef = useRef(null);
    const userData = useSelector((state) => state.user.value.userData);
    const { commentNotification } = useNotification();

    const { addPostComment, addPostCommentH } = useAddComment();
    const addComment = () => {
        if (commentRef.current.value) {
            const comment = {
                userid: userData.id,
                comment: commentRef.current.value,
                commentTime: new Date().toISOString(),
            };
            commentNotification(userData, postData.user, postData, commentRef.current.value);
            posts && setPosts ? addPostComment(comment, postData.id, posts, setPosts) : addPostCommentH(comment, postData.id);
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
