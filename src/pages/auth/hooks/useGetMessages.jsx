import { useDispatch } from "react-redux";
import { getChatroomsByUserid } from "../../../Services/messageServices";
import { storeChatroom } from '../../../store/slices/chatroomsSlice';

const useGetMessages = () => {
    const dispatch = useDispatch();

    const getMessages = async (userid) => {
        const data = await getChatroomsByUserid(userid); 
        dispatch(storeChatroom(data.data));
    }

    return { getMessages };
}

export default useGetMessages;