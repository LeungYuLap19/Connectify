import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import postsReducer from './slices/postsSlice'
import notificationsReducer from './slices/notificationsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        notifications: notificationsReducer,
    }
});

export default store;