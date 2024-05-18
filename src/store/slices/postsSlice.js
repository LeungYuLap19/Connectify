import { createSlice } from "@reduxjs/toolkit";

const initState = {
    postsData: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: { value: initState },
    reducers: {
        storePosts: (state, action) => {
            state.value.postsData = action.payload;
        },
        addPost: (state, action) => {
            state.value.postsData = [action.payload, ...state.value.postsData];
        },
        togglePostLike: (state, action) => {
            const { postid, userid } = action.payload;
            const post = state.value.postsData.find((post) => post.id === postid);
            if (post) {
                if (post.likes.includes(userid)) {
                    post.likes = post.likes.filter((id) => id !== userid);
                } else {
                    post.likes.push(userid);
                }
            }
        }
    }
});

export const { storePosts, addPost, togglePostLike } = postsSlice.actions;
export default postsSlice.reducer;