import { createSlice } from "@reduxjs/toolkit"

const initState = {
    notificationsData: []
}

const notificationsSlice = createSlice({
    name: 'notificaitons',
    initialState: { value: initState },
    reducers: {
        storeNotification: (state, action) => {
            state.value.notificationsData = [
                ...state.value.notificationsData, 
                ...action.payload
            ];

            state.value.notificationsData.sort((a, b) => {
                return new Date(b.dateTime) - new Date(a.dateTime);
            });
        },
        removeNotification: (state, action) => {
            state.value.notificationsData.splice(action.payload, 1);
        },
        reset: (state) => {
            state.value = initState;
        }
    }
})  

export const { storeNotification, removeNotification, reset } = notificationsSlice.actions;
export default notificationsSlice.reducer;