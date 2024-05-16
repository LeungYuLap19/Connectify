const useCreatePost = () => {

    const handleCreatePost = async (post) => {
        const done = await useCreatePost(post);
        return done;
    };

    return { handleCreatePost };
}

export default useCreatePost;