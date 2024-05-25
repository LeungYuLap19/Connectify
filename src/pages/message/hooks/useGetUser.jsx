import { getUser } from "../../../Services/userServices";

const useGetUser = () => {
    const getUserByUserid = async (userid) => {
        const data = await getUser(userid);
        return data.data;
    }

    return { getUserByUserid };
}

export default useGetUser;