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

async function addComment(comment, postid) {
    try {
        const res = await axios.post('http://localhost:3000/post/addComment', {
            comment: comment,
            postid: postid
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to add comment');
        return null;
    }
}

async function getPostsFromFollowing(userid, lastPostTime) {
    try {
        const res = await axios.get('http://localhost:3000/post/getPostsFromFollowing', {
            params: {
                userid: userid,
                lastPostTime: lastPostTime,
            },
        });

        if (res.status === 200) {
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

async function getPostByPostid(postid) {
    try {
        const res = await axios.get(`http://localhost:3000/post/getPostByPostid/${postid}`);

        if (res.status === 200) {
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

export {
    createPost,
    getPostsByUserid,
    toggleLikeOnPost,
    addComment,
    getPostsFromFollowing,
    getPostByPostid
}