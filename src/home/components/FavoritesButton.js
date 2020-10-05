import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { addToFavorites, removeFromFavorites } from '../../redux/actions/homeActions'
import './FavoritesButton.css';

const Button = () => {
  const currentWeather = useSelector(state => state.currentWeather);
  const inFavorite = currentWeather.inFavorites;
  const dispatch = useDispatch();

  const favoritesButtonHandler = () => {
    inFavorite ?
      dispatch(removeFromFavorites(currentWeather.cityID)) :
      dispatch(addToFavorites({
        key: currentWeather.cityID,
        cityName: currentWeather.cityName
      }))
  }

  return (
    <div onClick={favoritesButtonHandler} className="heart-btn">
      <div className={`content ${inFavorite && 'heart-active'}`}>
        <span className={`heart ${inFavorite && 'heart-active'}`}></span>
        <span className={`text ${inFavorite && 'heart-active'}`}>{inFavorite ? 'Remove From' : 'Add To'} Favorites</span>
      </div>
    </div>
  );
};

export default Button;