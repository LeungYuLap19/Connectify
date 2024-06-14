import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refreshAccessToken } from "../../../Services/tokenServices";
import useGetNotifications from "./useGetNotifications";
import { login } from "../../../store/slices/userSlice";

const useInit = () => {
    const [loading, setLoading] = useState(false);
    const { getNotificationsByUserid } = useGetNotifications();
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    useEffect(() => {
        const initApp = async () => {
            const data = await refreshAccessToken();
            if (data) {
                setLoading(true);
                const userData = data.data;
                await getNotificationsByUserid(userData.id);
                dispatch(login(userData));
                setLoading(false);
                navigate('/connectify/main');
            }
            else {
                setLoading(false);
            }
        }

        initApp();
    }, []);

    return { loading };
}

export default useInit;