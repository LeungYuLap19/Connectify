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
        chatroomRemove: (state, action) => {
            const index = state.value.chatroomsData.findIndex(chatroom => chatroom.id === action.payload);
            console.log(index, action.payload);
            if (index !== -1) {
                state.value.chatroomsData.splice(index, 1);
            }
        },
        storeMessage: (state, action) => {
            const { message, chatroomid } = action.payload;
            const newChatroomsData = state.value.chatroomsData.map(chatroom => {
                if (chatroom.id === chatroomid) {
                    return {...chatroom, messages: [...chatroom.messages, message], lastTime: message.dateTime};
                }
                return chatroom
            });
            state.value.chatroomsData = newChatroomsData;
        },
        reset: (state) => {
            state.value = initState
        }
    }
});

export const { storeChatroom, chatroomRemove, storeMessage, reset } = chatroomsSlice.actions;
export default chatroomsSlice.reducer;