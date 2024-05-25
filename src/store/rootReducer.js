import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import postsReducer from './slices/postsSlice'
import notificationsReducer from './slices/notificationsSlice'
import chatroomsSlice from "./slices/chatroomsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        notifications: notificationsReducer,
        chatrooms: chatroomsSlice,
    }
});

export default store;