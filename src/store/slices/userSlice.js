import { createSlice } from "@reduxjs/toolkit";

const initState = { 
    userData: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: { value: initState },
    reducers: {
        login: (state, action) => {
            state.value.userData = action.payload;
        },
        modifyFollowings: (state, action) => {
            state.value.userData.followings = action.payload;
        },
        modifyIcon: (state, action) => {
            state.value.userData.icon = action.payload;
        },
        modifyBackground: (state, action) => {
            state.value.userData.background = action.payload;
        },
        reset: (state) => {
            state.value = initState;
        },
    }
});

export const { login, modifyFollowings, modifyIcon, modifyBackground, reset } = userSlice.actions;
export default userSlice.reducer;