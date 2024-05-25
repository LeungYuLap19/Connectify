import { useContext } from "react"
import { ChatroomContext } from "../../../context/ChatroomContext"
import { searchUsernames } from "../../../Services/userServices";
import { useSelector } from "react-redux";

const useSearch = () => {
    const { setSearchResult } = useContext(ChatroomContext);
    const userData = useSelector(state => state.user.value.userData);

    const searchUser = async (input) => {
        const data = await searchUsernames(input);
        if (data) {
            if (data.data.length > 0) {
                const result = {
                    following: [],
                    others: []
                }
                data.data.forEach(user => {
                    if (user.id !== userData.id) {
                        if (userData.followings.includes(user.id)) {
                            result.following.push(user);
                        } else {
                            result.others.push(user);
                        }
                    }
                });

                setSearchResult(result);
            } else {
                setSearchResult(null);
            }
        }
    }

    return { searchUser };
}

export default useSearch;
