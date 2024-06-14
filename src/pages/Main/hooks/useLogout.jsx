import { cleanTokens } from "../../../Services/tokenServices";

const useLogout = () => {

    const logout = async () => {
        await cleanTokens();
    }

    return { logout };
}

export default useLogout;