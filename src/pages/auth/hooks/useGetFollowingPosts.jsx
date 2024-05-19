import { useDispatch, useSelector } from 'react-redux';
import { getPostsFromFollowing } from '../../../Services/postServices'
import { storePosts } from '../../../store/slices/postsSlice'

function useGetFollowingPosts() {
    const lastPostTime = useSelector((state) => state.posts.value.lastPostTime);
    const dispatch = useDispatch();

    const getPosts = async (userid) => {
        const data = await getPostsFromFollowing(userid, lastPostTime);
        dispatch(storePosts(data.data));
    }

    return { getPosts };
}

export default useGetFollowingPosts;