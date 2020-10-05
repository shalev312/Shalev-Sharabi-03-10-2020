import React from 'react';
import { useSelector } from 'react-redux';

import './DayWeatherItem.css';

const DayWeatherItem = (props) => {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <li className={`day-weather-item ${darkMode && " dark-mode"}`}>
            <h2>{props.day}</h2>
            <div>
                <img src={props.icon} alt={props.c} />
                <h3>{props.c} &deg;C</h3>
            </div>
        </li>
    );
};

export default DayWeatherItem;