import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../shared/components/UIElements/Card';
import FavoritesButton from './FavoritesButton';
import DayWeatherList from './DayWeatherList';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import './CardHome.css';

const CardHome = () => {
    const weatherText = useSelector(state => state.currentWeather.weatherText);

    return (
        <Card className="card-home">
            <Search />
            <div className="card-home__header">
                <CurrentWeather />
                <FavoritesButton />
            </div>
            <h2 className="card-home__state">{weatherText}</h2>
            <DayWeatherList />
        </Card>
    );
};

export default CardHome;