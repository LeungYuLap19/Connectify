import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { searchUsernames } from '../../../Services/userServices';
import { useSelector } from "react-redux";

const useSearch = () => {
    const { setSearchResult } = useContext(SearchContext);
    const userData = useSelector(state => state.user.value.userData);

    const searchUser = async (input) => {
        const data = await searchUsernames(input);
        if (data) {
           if (data.data.length > 0) {
                const filteredResults = data.data.filter(user => user.id !== userData.id);
                setSearchResult(filteredResults);
            } else {
                setSearchResult(null);
            }
        }
    }

    return { searchUser };
}

export default useSearch;