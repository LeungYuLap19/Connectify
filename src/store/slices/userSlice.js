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
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;