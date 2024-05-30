import React, { useEffect } from 'react';
import indexStyle from './index.module.css';
import PostLoading from '../../../../animations/PostLoading';
import { useSelector } from 'react-redux';
import Post from '../../../profile/components/post/Index';
import useDiscovery from './../../../Main/hooks/useDiscovery';
import { InView } from 'react-intersection-observer';

export default function Index() {
  const randomPostsData = useSelector(state => state.discovery.value.randomPostsData);
  const { getDiscoveryPosts } = useDiscovery();

  return (
    <div className={indexStyle['container']}>
      {
        randomPostsData.length > 0 ?
        <>
          {randomPostsData.map((post, index) => (
            <Post key={index} post={post} />
          ))}
          <InView
            as='div'
            className={indexStyle['load-more']}
            onChange={(inView, _) => {
              if (inView) {
                getDiscoveryPosts();
              }
            }}
          >
          </InView>
        </> 
        :
        (
          <>
            {Array.from({ length: 12 }).map((_, index) => (
              <PostLoading key={index} />
            ))}
          </>
        )
      }
    </div>
  )
}
