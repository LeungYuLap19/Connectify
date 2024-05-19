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
        logout: (state) => {
            state.value = initState;
        },
        // 
        modifyFollowings: (state, action) => {
            state.value.userData.followings = action.payload;
        }
    }
});

export const { login, logout, modifyFollowings } = userSlice.actions;
export default userSlice.reducer;