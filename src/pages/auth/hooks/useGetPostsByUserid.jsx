import { getPostsByUserid } from '../../../Services/postServices'

function useGetPostsByUserid() {
    const getPosts = async (userid) => {
        const data = await getPostsByUserid(userid);
        return data;
    }

    return { getPosts };
}

export default useGetPostsByUserid;