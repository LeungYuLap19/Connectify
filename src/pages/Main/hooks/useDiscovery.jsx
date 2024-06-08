import { useDispatch, useSelector } from "react-redux";
import { discoverPosts, discoverUsers } from "../../../Services/discoveryServices";
import { storeDiscoverUsers, storeDiscoverPosts} from "../../../store/slices/discoverySlice";

const useDiscovery = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.value.userData);

    const getDiscoverUsers = async () => {
        const data = await discoverUsers(userData.id);
        dispatch(storeDiscoverUsers(data.data));
    }

    const getDiscoveryPosts = async () => {
        const data = await discoverPosts(userData.id);
        dispatch(storeDiscoverPosts(data.data));
    }

    return { getDiscoverUsers, getDiscoveryPosts };
}

export default useDiscovery;