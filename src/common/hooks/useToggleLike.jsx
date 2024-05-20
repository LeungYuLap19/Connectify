import { useDispatch } from 'react-redux';
import { toggleLikeOnPost } from '../../Services/postServices';
import { togglePostLike } from '../../store/slices/postsSlice';

const useToggleLike = () => {
    const dispatch = useDispatch();

    const toggleLike = async (userid, postid, posts, setPosts) => {
        const data = await toggleLikeOnPost(userid, postid);
        const updatedLikes = data.likes;

        const updatedPosts = [...posts];
        const postIndex = updatedPosts.findIndex((post) => post.id === postid);
        updatedPosts[postIndex].likes = updatedLikes;
        setPosts(updatedPosts);
    };

    const toggleLikeH = async (userid, postid) => {
        const data = await toggleLikeOnPost(userid, postid);
        const updatedLikes = data.likes;
        console.log(updatedLikes)
        dispatch(togglePostLike({ updatedLikes: updatedLikes, postid: postid }));
    }

    return { toggleLike, toggleLikeH };
};

export default useToggleLike;