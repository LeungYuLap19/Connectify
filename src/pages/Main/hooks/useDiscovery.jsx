import { useDispatch, useSelector } from "react-redux";
import { discoverUsers } from "../../../Services/discoveryServices";
import { storeDiscoverUsers } from "../../../store/slices/discoverySlice";

const useDiscovery = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.value.userData);

    const getDiscoverUsers = async () => {
        const data = await discoverUsers(userData.id);
        dispatch(storeDiscoverUsers(data.data));
    }

    return { getDiscoverUsers };
}

export default useDiscovery;