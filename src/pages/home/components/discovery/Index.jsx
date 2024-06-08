import React from 'react'
import indexStyle from './index.module.css';
import UserTag from '../../../../common/components/userTag/Index';
import { useSelector } from 'react-redux';
import Weather from '../weather/Index';
import PostLoading from '../../../../animations/PostLoading';
import Post from '../../../profile/components/post/Index';

export default function Index() {
    const discoverUsers = useSelector(state => state.discovery.value.discoverUsers);
    const discoverPosts = useSelector(state => state.discovery.value.discoverPosts);

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
                                        <Post key={index} post={post} />
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
        </div>
    )
}
