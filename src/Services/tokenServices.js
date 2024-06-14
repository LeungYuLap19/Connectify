import api from "./axiosInstance"
import store from './../store/rootReducer';
import { reset as resetUser } from '../store/slices/userSlice';
import { reset as resetPosts } from '../store/slices/postsSlice';
import { reset as resetNotifications } from '../store/slices/notificationsSlice';
import { reset as resetChatrooms } from '../store/slices/chatroomsSlice';
import { reset as resetDiscovery } from'../store/slices/discoverySlice';

async function refreshAccessToken() {
    try {
        const res = await api.post('/token/refreshAccessToken');
        if (res.status === 200) {
            return res.data;
        } else {
            if (res.status === 401 || res.status === 403) {
                await cleanTokens();
            }
            return null;
        }
    } catch (error) {
        await cleanTokens();
    }
}

async function cleanTokens() {
    try {
        const res = await api.post('/token/cleanTokens');

        if (res.status === 200) {
            resetAllRedux();
            if (window.location.href !== 'http://localhost:5173/') {
                window.location.href = 'http://localhost:5173/';
            }
        }
    } catch (error) {
        console.error('Error cleaning tokens:', error);
        throw error;
    }
}

function resetAllRedux() {
    store.dispatch(resetUser());
    store.dispatch(resetPosts());
    store.dispatch(resetNotifications());
    store.dispatch(resetChatrooms());
    store.dispatch(resetDiscovery());
}

export {
    refreshAccessToken,
    cleanTokens
}
