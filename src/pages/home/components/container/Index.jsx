import React from 'react';
import indexStyle from './index.module.css';
import Post from '../post/Index';
import { InView } from 'react-intersection-observer';
import PostWindow from '../../../../common/components/postWindow/Index';
import DotLoading from '../../../../animations/DotLoading';
import PostLoading from '../../../../animations/PostLoading';
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
  } = usePosts();

  return (
    <div className={indexStyle.container}>
      <div className={indexStyle.wrapper}>
        <button className={indexStyle['getOlder']} onClick={handleRefresh}>
          {loading ? <DotLoading /> : <>Refresh</>}
        </button>

        {postsData.length > 0 ? (
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
            <button className={indexStyle['getOlder']} onClick={handleLoadMore}>
              {loading ? <DotLoading /> : <>View More Posts</>}
            </button>
          </>
        ) : (
          <>
            <div className={`${indexStyle['item']} ${indexStyle['post-loader']}`}>
              <PostLoading />
            </div>
            <div className={`${indexStyle['item']} ${indexStyle['post-loader']}`}>
              <PostLoading />
            </div>
          </>
        )}
      </div>
      {postid && postUser && (
        <PostWindow postUser={postUser} posts={postsData} postid={postid} setPostid={setPostid} />
      )}
    </div>
  );
}
