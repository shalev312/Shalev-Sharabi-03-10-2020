import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFavoritesWeatherDetails } from '../../tools/fetchFunction'
import FavoritesWeatherList from '../components/FavoritesWeatherList';
import Card from '../../shared/components/UIElements/Card';
import './Favorites.css';

const Favorites = () => {
    const dispatch = useDispatch();
    const arrFavoritesKey = useSelector(state => state.favoritesKey);
    useEffect(() => {
        (async () => {
            updateFavoritesWeatherDetails(arrFavoritesKey, dispatch)
        })();
    }, [arrFavoritesKey, dispatch]);

    return (
        <div className="favorites">
            <Card className="favorites__content">
                <h2 className="favorites-header">
                    Favorites
                </h2>
                <div className="favorites-weather">
                    <FavoritesWeatherList />
                </div>
            </Card>
        </div>
    );
};

export default Favorites;