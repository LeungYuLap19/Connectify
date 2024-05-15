import axios from "axios";

async function createUser(username, email, password) {
    try {
        const res = await axios.post('http://localhost:3000/auth/createUser', {
            username: username,
            email: email,
            password: password
        });

        if (res.status === 201) {
            return res.data;
        }
        else {
            return null;
        }
        
    } catch (error) {
        if (error.response) {
            const res = error.response.data;
            if (res.error) {
                alert(res.error);
            }
            else {
                alert('An error occurred');
            }
        } 
        else {
            alert('Network error or other exception occurred');
        }
        return null;
    }
}

async function userLogin(identifier, password) {
    try {
        const res = await axios.post('http://localhost:3000/auth/userLogin', {
            identifier: identifier,
            password: password
        });

        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }

    } catch (error) {
        if (error.response) {
            const res = error.response.data;
            if (res.error) {
                alert(res.error);
            }
            else {
                alert('An error occurred');
            }
        } 
        else {
            alert('Network error or other exception occurred');
        }
        return null;
    }
}

export {
    createUser,
    userLogin
}