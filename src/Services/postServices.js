import axios from "axios";

async function createPost(postData) {
    try {
        const res = await axios.post('http://localhost:3000/post/createPost', {
            postData: postData
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('An error occurred');
        return null;
    }
}

async function getPostsByUserid(userid) {
    try {
        const res = await axios.post('http://localhost:3000/post/getPostsByUserid', {
            userid: userid,
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to fetch posts');
        return null;
    }
}

async function toggleLikeOnPost(userid, postid) {
    try {
        const res = await axios.post('http://localhost:3000/post/toggleLikeOnPost', {
            userid: userid,
            postid: postid
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to toggle like');
        return null;
    }
}



export {
    createPost,
    getPostsByUserid,
    toggleLikeOnPost,
}