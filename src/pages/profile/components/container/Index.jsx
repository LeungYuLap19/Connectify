import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import Info from '../info/Index'
import Posts from '../posts/Index'
import PostWindow from '../../../../common/components/postWindow/Index';
import useGetPostsByUserid from '../../../auth/hooks/useGetPostsByUserid';
import { ProfileContext } from '../../../../context/ProfileContext';

export default function Index({ userData }) {
  const [posts, setPosts] = useState(null);
  const [postid, setPostid] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, [userData]);

  return (
    <ProfileContext.Provider value={{ userData, posts, setPosts, postid, setPostid, loading }}>
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

        { postid && <PostWindow /> } 
      </div>
    </ProfileContext.Provider>
  )
}
