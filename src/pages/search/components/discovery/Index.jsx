import React, { useEffect, useState } from 'react';
import indexStyle from './index.module.css';
import PostLoading from '../../../../animations/PostLoading';
import { useSelector } from 'react-redux';
import Post from '../../../profile/components/post/Index';
import useDiscovery from './../../../Main/hooks/useDiscovery';
import { InView } from 'react-intersection-observer';
import DotLoading from '../../../../animations/DotLoading';

export default function Index() {
  const randomPostsData = useSelector(state => state.discovery.value.randomPostsData);
  const { getDiscoveryPosts } = useDiscovery();
  const [loading, setLoading] = useState(false);

  return (
    <>
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
              onChange={ async (inView, _) => {
                if (inView) {
                  setLoading(true);
                  await getDiscoveryPosts();
                  setLoading(false);
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
      {
        loading &&
        <div className={indexStyle['loader']}>
          <DotLoading /> 
        </div>
      }
    </>
    
  )
}
