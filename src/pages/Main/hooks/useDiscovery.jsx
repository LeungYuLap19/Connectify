import { useDispatch, useSelector } from "react-redux";
import { randomPosts } from "../../../Services/discoveryServices";
import { storeRandomPosts } from "../../../store/slices/discoverySlice";

const useDiscovery = () => {
    const dispatch = useDispatch();
    const lastPostIndex = useSelector(state => state.discovery.value.randomPostsData);
    const userData = useSelector(state => state.user.value.userData);

    const getDiscoveryPosts = async () => {
        const data = await randomPosts(userData.id, lastPostIndex);
        console.log(data);
        dispatch(storeRandomPosts({ posts: data.data, lastPostIndex: data.lastIndex }));
    }

    return { getDiscoveryPosts };
}

export default useDiscovery;