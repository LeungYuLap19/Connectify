import React, { useState } from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';
import { useSelector } from 'react-redux';
import Weather from '../weather/Index';
import PostLoading from '../../../../animations/PostLoading';
import Post from '../../../profile/components/post/Index';
import useOpenPost from '../../../notifications/hooks/useOpenPost';
import PostWindow from '../../../../common/components/postWindow/Index';

export default function Index() {
    const discoverUsers = useSelector(state => state.discovery.value.discoverUsers);
    const discoverPosts = useSelector(state => state.discovery.value.discoverPosts);
    const [postData, setPostData] = useState(null);
    const { getPost } = useOpenPost(setPostData);

    return (
        <div className={indexStyle['container']}>
            <div className={indexStyle['weather']}>
                <Weather />
            </div>
            
            <div className={indexStyle['users']}>
                <p>People to follow</p>
                {
                    discoverUsers.map((userData, index) => {
                        return (
                            <div key={index} className={indexStyle['item']}> 
                                <UserTag key={index} userData={userData} clickable={true} />
                            </div>
                        )
                    })
                }
            </div>

            <div className={indexStyle['posts']}>
                <p className={indexStyle['title']}>Discover posts</p>
                <div className={indexStyle['grid']}>
                    {
                        discoverPosts.length > 0 ?
                        <>
                            {
                                discoverPosts.map((post, index) => {
                                    return (
                                        <img 
                                        onClick={async () => {
                                            getPost(post.id);
                                        }}
                                        key={index}
                                        src={post.photo} />
                                    )
                                })
                            }
                        </> :
                        <>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <PostLoading key={index} />
                            ))}
                        </>
                    }
                </div>
            </div>
            { postData && <PostWindow postUser={postData[0].user} posts={postData} setPosts={setPostData} postid={postData[0].id} setPostid={setPostData}/> }
        </div>
    )
}
