import { createPost } from "../../../Services/postServices";

const useCreatePost = () => {

    const handleCreatePost = async (post) => {
        const done = await createPost(post);
        return done;
    };

    return { handleCreatePost };
}

export default useCreatePost;