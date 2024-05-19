import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import { searchUsernames } from '../../../Services/userServices';

const useSearch = () => {
    const { setSearchResult } = useContext(SearchContext);

    const searchUser = async (input) => {
        const data = await searchUsernames(input);
        if (data) {
           if (data.data.length > 0) {
            setSearchResult(data.data);
            } else {
                setSearchResult(null);
            }
        }
    }

    return { searchUser };
}

export default useSearch;