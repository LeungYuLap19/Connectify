import { useDispatch } from 'react-redux';
import { addComment } from '../../Services/postServices'
import { addHomeComment } from '../../store/slices/postsSlice';

const useAddComment = () => {
    const dispatch = useDispatch(); 

    const addPostComment = async (comment, postid, posts, setPosts) => {
        const data = await addComment(comment, postid);
        const updatedComments = data.comments;

        const updatedPosts = [...posts];
        const postIndex = updatedPosts.findIndex((post) => post.id === postid);
        updatedPosts[postIndex].comments = updatedComments;
        setPosts(updatedPosts);
    };

    const addPostCommentH = async (comment, postid) => {
        const data = await addComment(comment, postid);
        const updatedComments = data.comments;
        dispatch(addHomeComment({ updatedComments, postid }));
    }

    return { addPostComment, addPostCommentH };
}

export default useAddComment;