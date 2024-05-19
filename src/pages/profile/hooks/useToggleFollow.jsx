import { useContext } from "react"
import { ProfileContext } from "../../../context/ProfileContext"
import { toggleFollowUser } from "../../../Services/userServices";
import { useDispatch } from "react-redux";
import { modifyFollowings } from '../../../store/slices/userSlice';

const useToggleFollow = () => {
    const { localUser, setLocalUser } = useContext(ProfileContext);
    const dispatch = useDispatch();

    const toggleFollow = async (userid, followerid) => {
        const data = await toggleFollowUser(userid, followerid);
        const updatedFollowers = data.followers;
        const updatedFollowings = data.followings;

        const updatedUser = {...localUser};
        updatedUser.followers = updatedFollowers;
        setLocalUser(updatedUser);

        dispatch(modifyFollowings(updatedFollowings));
    }

    return { toggleFollow };
}

export default useToggleFollow;