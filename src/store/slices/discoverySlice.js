import { createSlice } from "@reduxjs/toolkit"

const initState = {
    randomPostsData: [],
    lastPostIndex: null
}

const discoverySlice = createSlice({
    name: 'posts',
    initialState: { value: initState },
    reducers: {
        storeRandomPosts: (state, action) => {
            const { posts, lastPostIndex } = action.payload
            state.value.randomPostsData = [...state.value.randomPostsData, ...posts];
            if (state.value.randomPostsData.length > 0) {
                state.value.lastPostIndex = lastPostIndex;
            }
        }
    }
});

export const { storeRandomPosts } = discoverySlice.actions;
export default discoverySlice.reducer;