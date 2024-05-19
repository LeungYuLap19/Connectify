import axios from "axios";

async function searchUsernames(input) {
    try {
        const res = await axios.get(`http://localhost:3000/user/searchUsernames/${input}`);

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed find usernames');
        return null;
    }
}

async function toggleFollowUser(userid, followerid) {
    try {
        const res = await axios.post('http://localhost:3000/user/toggleFollowUser', {
            userid: userid,
            followerid: followerid
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed toggle follow');
        return null;
    }
}

export {
    searchUsernames,
    toggleFollowUser,
}