import { createUser } from "../../../Services/authServices";

function useSignup() {

    const signup = async (username, email, password) => {
        const data = await createUser(username, email, password);
        return data;
    };

    return { signup };
}

export default useSignup;