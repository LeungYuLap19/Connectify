import { useDispatch, useSelector } from "react-redux";
import { randomPosts } from "../../../Services/discoveryServices";
import { storeRandomPosts } from "../../../store/slices/discoverySlice";

const useDiscovery = () => {
    const dispatch = useDispatch();
    const lastPostIndex = useSelector(state => state.discovery.value.lastPostIndex);
    const userData = useSelector(state => state.user.value.userData);

    const getDiscoveryPosts = async () => {
        console.log(lastPostIndex);
        const data = await randomPosts(userData.id, lastPostIndex);
        dispatch(storeRandomPosts({ posts: data.data, lastPostIndex: data.lastIndex }));
    }

    return { getDiscoveryPosts };
}

export default useDiscovery;