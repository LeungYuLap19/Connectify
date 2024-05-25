import { createSlice } from "@reduxjs/toolkit"

const initState = {
    chatroomsData: []
}

const chatroomsSlice = createSlice({
    name: 'chatrooms',
    initialState: { value: initState },
    reducers: {
        storeChatroom: (state, action) => {
            state.value.chatroomsData = [...state.value.chatroomsData, ...action.payload];

            state.value.chatroomsData.sort((a, b) => {
                return new Date(b.lastTime) - new Date(a.lastTime);
            });
        },
        removeChatroom: (state, action) => {
            // index
            state.value.chatroomsData.splice(action.payload, 1);
        },
    }
});

export const { storeChatroom, removeChatroom } = chatroomsSlice.actions;
export default chatroomsSlice.reducer;