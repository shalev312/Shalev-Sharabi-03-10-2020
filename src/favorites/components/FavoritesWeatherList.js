import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import FavoritesWeatherItem from './FavoritesWeatherItem';
import './FavoritesWeatherList.css';

const FavoritesWeatherList = () => {
    const favoritesDetails = useSelector(state => state.favoritesDetails)
    let elements;
    if (!favoritesDetails.length) {
        elements = <li className="favorites-empty">
            <Link to="/Tel Aviv">
                Favorites List is Empty..<br />
                Add Now!
            </Link>
        </li>
    } else {
        elements = favoritesDetails.map(item => (
            <FavoritesWeatherItem
                key={item.key}
                id={item.key}
                icon={item.weatherIcon}
                city={item.cityName}
                c={item.temp}
                text={item.text}
            />
        ))
    }
    return (
        elements
    );
};

export default FavoritesWeatherList;