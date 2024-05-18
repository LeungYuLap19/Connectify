import { useContext, useState } from "react"
import { addComment } from '../../Services/postServices'
import { ProfileContext } from "../../context/ProfileContext";

const useAddComment = () => {
    const { posts, setPosts, postid } = useContext(ProfileContext);

    const addPostComment = async (comment) => {
        const data = await addComment(comment, postid);
        const updatedComments = data.comments;

        const updatedPosts = [...posts];
        const postIndex = updatedPosts.findIndex((post) => post.id === postid);
        updatedPosts[postIndex].comments = updatedComments;
        setPosts(updatedPosts);
    };

    return { addPostComment };
}

export default useAddComment;