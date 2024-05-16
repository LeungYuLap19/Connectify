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

export {
    createPost,
}