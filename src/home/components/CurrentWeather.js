import React from 'react';
import { useSelector } from 'react-redux';

import './CurrentWeather.css';

const CurrentWeather = () => {
    const currentWeather = useSelector(state => state.currentWeather);

    return (
        <div className="current-weather">
            <img src={currentWeather.weatherIcon} alt={currentWeather.weatherText} />
            <div>
                <h3>{currentWeather.cityName + ", " + currentWeather.countryName}</h3>
                <h4>{currentWeather.temp}&deg;C</h4>
            </div>
        </div>
    );
};

export default CurrentWeather;