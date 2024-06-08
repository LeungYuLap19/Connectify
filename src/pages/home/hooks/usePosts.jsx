import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../store/slices/postsSlice';
import useGetFollowingPosts from './../../auth/hooks/useGetFollowingPosts';

function usePosts() {
  const dispatch = useDispatch();
  const postsData2 = useSelector((state) => state.posts.value.postsData);
  const discoverPosts = useSelector(state => state.discovery.value.discoverPosts);
  const lastPostTime = useSelector((state) => state.posts.value.lastPostTime);
  const userData = useSelector((state) => state.user.value.userData);
  const { getPosts } = useGetFollowingPosts();
  const [loading, setLoading] = useState(false);
  const [postid, setPostid] = useState(null);
  const [postUser, setPostUser] = useState(null);
  const [getLatest, setGetLatest] = useState(false);

  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    if (postid) {
      let postIndex = discoverPosts.findIndex((post) => post.id === postid);
      let postSource = discoverPosts;
      setPostsData(postSource);

      if (postIndex === -1) {
        postIndex = postsData2.findIndex((post) => post.id === postid);
        postSource = postsData2;
        setPostsData(postSource);
      }
      if (postIndex !== -1) {
        setPostUser(postSource[postIndex].user);
      } else {
        setPostUser(null);
      }
    }
  }, [postid, discoverPosts, postsData2]);

  useEffect(() => {
    const refreshPosts = async () => {
      await getPosts(userData.id);
      setLoading(false);
      setGetLatest(false);
    };
    if (lastPostTime === null && getLatest) {
      refreshPosts();
    }
  }, [lastPostTime, userData.id, getPosts]);

  const handleRefresh = async () => {
    setLoading(true);
    dispatch(reset());
  };

  const handleLoadMore = async () => {
    setLoading(true);
    await getPosts(userData.id);
    setLoading(false);
  };

  return {
    postsData2,
    postsData,
    postid,
    postUser,
    loading,
    handleRefresh,
    handleLoadMore,
    setPostid,
    setGetLatest
  };
}

export default usePosts;
