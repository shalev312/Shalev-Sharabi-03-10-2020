import React from 'react';

import { useSelector } from 'react-redux';
import './Card.css';

const Card = props => {
  const darkMode = useSelector(state => state.darkMode);
  return (
    <div className={`${darkMode && " dark-mode "} card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
