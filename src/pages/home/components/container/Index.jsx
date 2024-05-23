import React from 'react';
import indexStyle from './index.module.css';
import Post from '../post/Index';
import { InView } from 'react-intersection-observer';
import PostWindow from '../../../../common/components/postWindow/Index';
import DotLoading from '../../../../animations/DotLoading';
import usePosts from '../../hooks/usePosts';

export default function Index() {
  const {
    postsData,
    postid,
    postUser,
    loading,
    handleRefresh,
    handleLoadMore,
    setPostid,
    setGetLatest
  } = usePosts();

  return (
    <div className={indexStyle.container}>
      <div className={indexStyle.wrapper}>
        {!loading &&
          <button 
            className={indexStyle['getOlder']} 
            onClick={() => {
              handleRefresh();
              setGetLatest(true);
            }}
          >
            <img src='\assets\images\reload.png' alt='reload'/>
          </button>}
        { loading && <DotLoading /> }

        {
          postsData.length > 0 && (
            <>
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
                  <Post postData={postData} setPostid={setPostid} />
                </InView>
              ))}

              <InView
                as='div'
                className={indexStyle['load-more']}
                onChange={(inView, entry) => {
                  if (inView) {
                    entry.target.classList.add(indexStyle['fade-in']);
                    handleLoadMore();
                  }
                  else {
                    entry.target.classList.remove(indexStyle['fade-in']);
                  }
                }}
              ></InView>
              { loading && <DotLoading /> }
            </>
          )
        }
      </div>
      {postid && postUser && (
        <PostWindow postUser={postUser} posts={postsData} postid={postid} setPostid={setPostid} />
      )}
    </div>
  );
}
