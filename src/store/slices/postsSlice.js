import { createSlice } from "@reduxjs/toolkit";

const initState = {
    postsData: [],
    lastPostTime: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState: { value: initState },
    reducers: {
        storePosts: (state, action) => {
            state.value.postsData = [...state.value.postsData, ...action.payload];
            if (state.value.postsData.length > 0) {
                state.value.lastPostTime = state.value.postsData[state.value.postsData.length - 1].postTime;
            }
        },
        // addPost: (state, action) => {
        //     state.value.postsData = [action.payload, ...state.value.postsData];
        // },
        togglePostLike: (state, action) => {
            const { updatedLikes, postid } = action.payload;
            const updatedPosts = state.value.postsData.map((post) => {
                if (post.id === postid) {
                    return { ...post, likes: updatedLikes };
                }
                return post;
            });
            state.value.postsData = updatedPosts;
        },
        addHomeComment: (state, action) => {
            const { updatedComments, postid } = action.payload;
            const updatedPosts = state.value.postsData.map((post) => {
                if (post.id === postid) {
                    return { ...post, comments: updatedComments };
                }
                return post;
            });
            state.value.postsData = updatedPosts;
        }
    }
});

export const { storePosts, togglePostLike, addHomeComment } = postsSlice.actions;
export default postsSlice.reducer;