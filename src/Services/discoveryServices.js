import axios from "axios";

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
    discoverUsers
}