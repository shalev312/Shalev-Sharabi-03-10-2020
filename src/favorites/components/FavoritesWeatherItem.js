import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './FavoritesWeatherItem.css';

const FavoritesWeatheritem = (props) => {
    const darkMode = useSelector(state => state.darkMode);
    return (
        <li className={`${darkMode && "dark-mode"} favorite-weather`}>
            <Link to={`/${props.city}`}>
                <h2>{props.city}</h2>
                <img src={props.icon} alt={props.c} />
                <h3>{Math.floor(props.c)}&deg;C</h3>
                <h4>{props.text}</h4>
            </Link>
        </li>
    );
};

export default FavoritesWeatheritem;