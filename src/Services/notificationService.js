import axios from "axios";

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
        alert('Failed to send notification');
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
        alert('Failed to send notification');
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
        alert('Failed to send notification');
        const res = error.response.data;
        console.log(res.error);
    }
}

export {
    handleLike,
    handleComment,
    handleFollow
}