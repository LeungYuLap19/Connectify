import { userLogin } from "../../../Services/authServices";

function useSignin() {

    const signin = async (identifier, password, rememberMe) => {
        const data = await userLogin(identifier, password, rememberMe);
        return data;
    };

    return { signin };
}

export default useSignin;