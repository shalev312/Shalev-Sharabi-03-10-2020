import React from 'react';
import { useSelector } from 'react-redux';

import './MainHeader.css';

const MainHeader = props => {
  const darkMode = useSelector(state => state.darkMode);
  return <header className={`${darkMode && "dark-mode"} main-header`}>{props.children}</header>;
};

export default MainHeader;
