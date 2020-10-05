import React from 'react';
import { useSelector } from 'react-redux'

import DayWeatherItem from './DayWeatherItem';
import './DayWeatherList.css';

const DayWeatherList = () => {
    const next5DaysForecast = useSelector(state => state.next5DaysForecast);

    return (
        <ul className="day-weather-list">
            {
                next5DaysForecast.map((item, index) => <DayWeatherItem
                    key={index}
                    day={item.day}
                    icon={item.weatherIcon}
                    c={item.minTemp + "/" + item.maxTemp}
                />)
            }
        </ul>
    );
};

export default DayWeatherList;