import { userLogin } from "../../../Services/authServices";

function useSignin() {

    const signin = async (identifier, password) => {
        const data = await userLogin(identifier, password);
        return data;
    };

    return { signin };
}

export default useSignin;