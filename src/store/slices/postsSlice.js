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
    }
});

export const { storePosts } = postsSlice.actions;
export default postsSlice.reducer;