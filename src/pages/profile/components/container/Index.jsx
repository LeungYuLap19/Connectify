import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import Info from '../info/Index'
import Posts from '../posts/Index'
import PostWindow from '../../../../common/components/postWindow/Index';
import { ProfileContext } from '../../../../context/ProfileContext';
import useGetPostsByUserid from '../../../auth/hooks/useGetPostsByUserid';

export default function Index({ userData }) {
  const [posts, setPosts] = useState(null);
  const [postid, setPostid] = useState(null);
  const [loading, setLoading] = useState(false);
  const [localUser, setLocalUser] = useState(null);

  const { getPosts } = useGetPostsByUserid();
  useEffect(() => {
    setPosts(null);
    async function getPostByUserid() {
      setLoading(true);
      const posts = await getPosts(userData.id);
      if (posts) {
        const postsData = posts.data;
        setPosts(postsData);
      }
      setLoading(false);
    }
    getPostByUserid();

    setLocalUser(userData);
  }, [userData]);

  return (
    <ProfileContext.Provider value={{ localUser, setLocalUser, posts, setPosts, postid, setPostid, loading }}>
      {
        localUser && 
        <div className={indexStyle['container']}>
          <div className={indexStyle['background']}>

          </div>

          <div className={indexStyle['profile']}>
            <div className={indexStyle['profile-info']}>
              <Info />
            </div>
            
            <div className={indexStyle['profile-posts']}>
              <Posts />
            </div>
          </div>

          { postid && <PostWindow postUser={localUser} posts={posts} setPosts={setPosts} postid={postid} setPostid={setPostid}/> } 
        </div>
      }
    </ProfileContext.Provider>
  )
}
