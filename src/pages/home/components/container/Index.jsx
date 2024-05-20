import React, { useEffect, useState } from 'react';
import indexStyle from './index.module.css';
import Post from '../post/Index';
import { useSelector } from 'react-redux';
import { InView } from 'react-intersection-observer';
import PostWindow from '../../../../common/components/postWindow/Index';

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
      </div>
      { postid && postUser && <PostWindow postUser={postUser} posts={postsData} postid={postid} setPostid={setPostid} /> }
    </div>
  );
}