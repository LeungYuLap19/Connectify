import api from './axiosInstance';

async function createUser(username, email, password) {
    try {
        const res = await api.post('/auth/createUser', {
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

async function userLogin(identifier, password, rememberMe) {
    try {
        const res = await api.post('/auth/userLogin', {
            identifier: identifier,
            password: password,
            rememberMe: rememberMe
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