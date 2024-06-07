import { useDispatch } from "react-redux";
import { getWeather } from "../../../Services/weatherServices";
import { setCurrWeather } from '../../../store/slices/discoverySlice';

const useWeather = () => {
    const dispatch = useDispatch();

    const getLocWeather = async () => {
        const data = await getWeather();
        dispatch(setCurrWeather(data));
    }

    return { getLocWeather };
}

export default useWeather;