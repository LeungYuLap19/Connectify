import { useContext } from 'react';
import { toggleLikeOnPost } from '../../Services/postServices';
import { ProfileContext } from '../../context/ProfileContext';

const useToggleLike = () => {
    const { posts, setPosts } = useContext(ProfileContext);

    const toggleLike = async (userid, postid) => {
        const data = await toggleLikeOnPost(userid, postid);
        const updatedLikes = data.likes;

        const updatedPosts = [...posts];
        const postIndex = updatedPosts.findIndex((post) => post.id === postid);
        updatedPosts[postIndex].likes = updatedLikes;
        setPosts(updatedPosts);
    };

    return { toggleLike };
};

export default useToggleLike;