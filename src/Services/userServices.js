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

async function getUser(userid) {
    try {
        const res = await axios.get(`http://localhost:3000/user/getUser/${userid}`);

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed to get user');
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

async function getListUsers(list) {
    try {
        const res = await axios.post('http://localhost:3000/user/getListUsers', {
            list: list
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (error) {
        alert('Failed getting users');
        return null;
    }
}

async function setIcon(userid, image) {
    try {
        const res = await axios.post('http://localhost:3000/user/setIcon', {
            userid: userid,
            image: image
        })

        if (res.status === 200) {
            console.log('set icon');
        }
    } catch (error) {
        alert('Failed setting icon');
    }
}

async function setBackground(userid, image) {
    try {
        const res = await axios.post('http://localhost:3000/user/setBackground', {
            userid: userid,
            image: image
        })

        if (res.status === 200) {
            console.log('set background');
        }
    } catch (error) {
        alert('Failed setting background');
    }
}

export {
    searchUsernames,
    getUser,
    toggleFollowUser,
    getListUsers,
    setIcon,
    setBackground
}