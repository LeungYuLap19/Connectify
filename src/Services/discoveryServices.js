import axios from "axios";

async function randomPosts(userid, lastPostIndex) {
    try {
        const res = await axios.post('http://localhost:3000/discovery/randomPosts', {
            userid: userid,
            lastPostIndex: lastPostIndex
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

export {
    randomPosts
}