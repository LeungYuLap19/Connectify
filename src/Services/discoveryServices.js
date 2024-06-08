import axios from "axios";

async function discoverPosts(userid) {
    try {
        const res = await axios.get(`http://localhost:3000/discovery/discoverPosts/${userid}`);

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
        const res = await axios.get(`http://localhost:3000/discovery/discoverUsers/${userid}`);
        
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