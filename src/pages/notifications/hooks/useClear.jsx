import { useDispatch } from "react-redux";
import { removeOne, reset } from '../../../store/slices/notificationsSlice';
import { removeAllNotifications, removeNotification } from "../../../Services/notificationService";

const useClear = () => {
    const dispatch = useDispatch();

    const useClearAll = async (userid) => {
        await removeAllNotifications(userid);
        dispatch(reset());
    }

    const useClearOne = async (notificationid, index) => {
        await removeNotification(notificationid);
        dispatch(removeOne(index));
    }

    return { useClearAll, useClearOne };
}

export default useClear;