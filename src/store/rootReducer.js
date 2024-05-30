import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import postsReducer from './slices/postsSlice'
import notificationsReducer from './slices/notificationsSlice'
import chatroomsSlice from "./slices/chatroomsSlice";
import discoverySlice from './slices/discoverySlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        notifications: notificationsReducer,
        chatrooms: chatroomsSlice,
        discovery: discoverySlice
    }
});

export default store;