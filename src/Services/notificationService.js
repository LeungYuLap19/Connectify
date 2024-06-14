import axios from "axios";
import api from './axiosInstance';

async function createNotification(notification) {
    try {
        const res = await api.post('/notification/createNotification', {
            notification: notification,
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to create notification');
        const res = error.response.data;
        console.log(res.error);
        return null;
    }
}

async function getNotifications(userid) {
    try {
        const res = await api.get(`/notification/getNotifications/${userid}`);

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to get notifications');
        const res = error.response.data;
        console.log(res.error);
        return null;
    }
}

async function removeNotification(notificationid) {
    try {
        const res = await api.post('/notification/removeNotification', {
            notificationid: notificationid,
        });

        if (res.status === 200) {
            console.log(res.data.message);
        }
    } catch (error) {
        alert('Failed to remove notifications');
        const res = error.response.data;
        console.log(res.error);
    }
}

async function removeAllNotifications(userid) {
    try {
        const res = await api.post('/notification/removeAllNotifications', {
            userid: userid
        });

        if (res.status === 200) {
            console.log(res.data.message);
        }
    } catch (error) {
        alert('Failed to remove notifications');
        const res = error.response.data;
        console.log(res.error);
    }
}

async function handleLike(notification) {
    try {
        const res = await axios.post('http://localhost:3001/notifications/handleLike', {
            notification: notification,
        });

        if (res.status === 200) {
            console.log(res.data.message);
        }
        else {
            console.log(res.data.error);
        }
    } catch (error) {
        // alert('Failed to send notification');
        const res = error.response.data;
        console.log(res.error);
    }
}

async function handleComment(notification) {
    try {
        const res = await axios.post('http://localhost:3001/notifications/handleComment', {
            notification: notification,
        });

        if (res.status === 200) {
            console.log(res.data.message);
        }
        else {
            console.log(res.data.error);
        }
    } catch (error) {
        // alert('Failed to send notification');
        const res = error.response.data;
        console.log(res.error);
    }
}

async function handleFollow(notification) {
    try {
        const res = await axios.post('http://localhost:3001/notifications/handleFollow', {
            notification: notification,
        });

        if (res.status === 200) {
            console.log(res.data.message);
        }
        else {
            console.log(res.data.error);
        }
    } catch (error) {
        // alert('Failed to send notification');
        const res = error.response.data;
        console.log(res.error);
    }
}

export {
    handleLike,
    handleComment,
    handleFollow,
    createNotification,
    getNotifications,
    removeNotification,
    removeAllNotifications,
}