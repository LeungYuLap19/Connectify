import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import Post from '../post/Index';
import { ProfileContext } from '../../../../context/ProfileContext';
import PostLoading from '../../../../animations/PostLoading';

export default function Index() {
    const { posts, setPostid, loading } = useContext(ProfileContext);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['separate']}>
                <div></div>
                <p>POSTS</p>
                <div></div>
            </div>

            <div className={indexStyle['posts-grid']}>
            {
                    loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <PostLoading key={index}/>
                        ))
                    ) : posts && posts.length > 0 ? (
                        posts.map((post, index) => (
                            <Post post={post} setPostid={setPostid} key={index} />
                        ))
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    )
}
