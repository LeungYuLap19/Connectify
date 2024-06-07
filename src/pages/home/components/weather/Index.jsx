import React, { useEffect } from 'react'
import indexStyle from './index.module.css';
import { useSelector } from 'react-redux';

export default function Index() {
    const weather = useSelector(state => state.discovery.value.weather);
    useEffect(() => {
        console.log(weather);
    }, [weather]);

    return (
        <div className={indexStyle['container']}>
            <>
                <div className={indexStyle['temp']}>
                    <p>{weather.temp_c}°</p>
                    <p className={indexStyle['location']}>Hong Kong</p>
                </div>

                {weather.condition && (
                    <div className={indexStyle['condition']}>
                        <img src={weather.condition.icon} alt="icon" />
                        <p>{weather.condition.text}</p>
                    </div>
                )}
            </>
        </div>
    )
}
