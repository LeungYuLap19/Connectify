import React, { useState } from 'react';
import indexStyle from './index.module.css';
import Post from '../post/Index';
import { useSelector } from 'react-redux';
import { InView } from 'react-intersection-observer';
import PostWindow from '../../../../common/components/postWindow/Index';

export default function Index() {
  const postsData = useSelector((state) => state.posts.value.postsData);
  const [postid, setPostid] = useState(null);

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
      {/* { postid && <PostWindow localUser={postsData.user} posts={postsData} postid={postid} setPostid={setPostid} /> } */}
    </div>
  );
}