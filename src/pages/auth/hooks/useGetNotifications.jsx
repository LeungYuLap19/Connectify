import { useDispatch } from "react-redux";
import { storeNotification } from "../../../store/slices/notificationsSlice"; 
import { getNotifications } from "../../../Services/notificationService";

const useGetNotifications = () => {
    const dispatch = useDispatch();
    
    const getNotificationsByUserid = async (userid) => {
        const data = await getNotifications(userid);
        dispatch(storeNotification(data.data));
    }

    return { getNotificationsByUserid };
}

export default useGetNotifications;