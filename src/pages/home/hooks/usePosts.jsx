import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../store/slices/postsSlice';
import useGetFollowingPosts from './../../auth/hooks/useGetFollowingPosts';

function usePosts() {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.value.postsData);
  const lastPostTime = useSelector((state) => state.posts.value.lastPostTime);
  const userData = useSelector((state) => state.user.value.userData);
  const { getPosts } = useGetFollowingPosts();
  const [loading, setLoading] = useState(false);
  const [postid, setPostid] = useState(null);
  const [postUser, setPostUser] = useState(null);

  useEffect(() => {
    if (postid) {
      const postIndex = postsData.findIndex((post) => post.id === postid);
      setPostUser(postsData[postIndex].user);
    }
  }, [postid, postsData]);

  useEffect(() => {
    const refreshPosts = async () => {
      await getPosts(userData.id);
      setLoading(false);
    };
    if (lastPostTime === null) {
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
    postsData,
    postid,
    postUser,
    loading,
    handleRefresh,
    handleLoadMore,
    setPostid,
  };
}

export default usePosts;
