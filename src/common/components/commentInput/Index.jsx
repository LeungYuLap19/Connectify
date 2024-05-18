import React, { useRef } from 'react'
import indexStyle from './index.module.css';

export default function Index() {
    const commentRef = useRef(null);

    return (
        <div className={indexStyle['container']}>
            <form action="submit">
                <input type="text" placeholder='comment...'/>
                <button type='submit'>
                    <img src="\assets\images\send.png" alt="comment-btn" />
                </button>
            </form>
        </div>
    )
}
