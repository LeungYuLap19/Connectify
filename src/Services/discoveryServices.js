import axios from "axios";
import api from './axiosInstance';

async function discoverPosts(userid) {
    try {
        const res = await api.get(`/discovery/discoverPosts/${userid}`);

        if(res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to get posts');
        return null;
    }
}

async function discoverUsers(userid) {
    try {
        const res = await api.get(`/discovery/discoverUsers/${userid}`);
        
        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to get users');
        return null;
    }
}

export {
    discoverPosts,
    discoverUsers
}