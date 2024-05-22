import { getPostByPostid } from "../../../Services/postServices"

const useOpenPost = (setPostData) => {

    const getPost = async (postid) => {
        const data = await getPostByPostid(postid);
        setPostData([data.data]);
    }

    return { getPost };
}

export default useOpenPost;