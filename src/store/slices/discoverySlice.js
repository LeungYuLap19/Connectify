import { createSlice } from "@reduxjs/toolkit"

const initState = {
    discoverPosts: [],
    discoverUsers: [],
    weather: {},
}

const discoverySlice = createSlice({
    name: 'discovery',
    initialState: { value: initState },
    reducers: {
        storeDiscoverPosts: (state, action) => {
            state.value.discoverPosts = [...action.payload];
        },
        storeDiscoverUsers: (state, action) => {
            state.value.discoverUsers = [...action.payload];
        },
        removeDiscoverUser: (state, action) => {
            state.value.discoverUsers = state.value.discoverUsers.filter(
                user => user.id !== action.payload
            );
        },
        setCurrWeather: (state, action) => {
            state.value.weather = action.payload;
        }
    }
});

export const { storeDiscoverPosts, storeDiscoverUsers, removeDiscoverUser, setCurrWeather } = discoverySlice.actions;
export default discoverySlice.reducer;