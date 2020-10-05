import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { updateDarkMode } from '../../../redux/actions/homeActions';
import './DarkModeButton.css'

const DarkModeButton = () => {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const darkModeButtonHandler = (e) => {
    dispatch(updateDarkMode(!darkMode))
  }

  return (
    <input className="dark-mode-button" type="checkbox" value={darkMode} onClick={(e) => darkModeButtonHandler(e)} />
  );
};

export default DarkModeButton;