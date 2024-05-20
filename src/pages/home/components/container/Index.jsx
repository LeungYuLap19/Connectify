import React, { useEffect, useState } from 'react';
import indexStyle from './index.module.css';
import Post from '../post/Index';
import { useSelector } from 'react-redux';
import { InView } from 'react-intersection-observer';
import PostWindow from '../../../../common/components/postWindow/Index';
import useGetFollowingPosts from '../../../auth/hooks/useGetFollowingPosts';
import DotLoading from '../../../../animations/DotLoading';

export default function Index() {
  const postsData = useSelector((state) => state.posts.value.postsData);
  const [postid, setPostid] = useState(null);
  const [postUser, setPostUser] = useState(null);

  useEffect(() => {
    if (postid) {
      const postIndex = postsData.findIndex((post) => post.id === postid);
      setPostUser(postsData[postIndex].user);
    }
  }, [postid]);

  const { getPosts } = useGetFollowingPosts();
  const [loading, setLoading] = useState(false);
  const userData = useSelector(state => state.user.value.userData);

  useEffect(() => {
    console.log(loading)
  }, [loading]);

  return (
    <div className={indexStyle.container}>
      <div className={indexStyle.wrapper}>
        {postsData.map((postData, index) => (
          <InView
            key={index}
            as="div"
            className={`${indexStyle.item}`}
            onChange={(inView, entry) => {
              if (inView) {
                entry.target.classList.add(indexStyle['fade-in']);
              } else {
                entry.target.classList.remove(indexStyle['fade-in']);
              }
            }}
          >
            <Post postData={postData} setPostid={setPostid}/>
          </InView>
        ))}
        <button
          className={indexStyle['getOlder']}
          onClick={async() => {
            setLoading(true);
            await getPosts(userData.id);
            setLoading(false);
          }}
        >
          {
            loading ? <DotLoading /> : <>View More Posts</>
          }
        </button>
      </div>
      { postid && postUser && <PostWindow postUser={postUser} posts={postsData} postid={postid} setPostid={setPostid} /> }
    </div>
  );
}