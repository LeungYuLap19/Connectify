import React from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';
import Post from '../post/Index';

export default function Index({ setPostData }) {
    const postsData = useSelector((state) => state.posts.value.postsData);
    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['separate']}>
                <div></div>
                <p>POSTS</p>
                <div></div>
            </div>

            <div className={indexStyle['posts-grid']}>
                {
                    postsData.map((post, index) => {
                        return (
                            <Post post={post} setPostData={setPostData} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
