import { useDispatch } from "react-redux";
import { createPost } from "../../../Services/postServices";
import { addPost } from "../../../store/slices/postsSlice";

const useCreatePost = () => {
    const dispatch = useDispatch();

    const handleCreatePost = async (post) => {
        const done = await createPost(post);
        if (done) {
            dispatch(addPost(post));
        }
        return done;
    };

    return { handleCreatePost };
}

export default useCreatePost;