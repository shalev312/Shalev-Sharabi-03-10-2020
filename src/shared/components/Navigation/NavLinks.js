import React from 'react';
import { NavLink } from 'react-router-dom';

import DarkModeButton from '../UIElements/DarkModeButton';
import './NavLinks.css';

const NavLinks = () => {

  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Home</NavLink>
    </li>
    <li>
      <NavLink to="/favorites">Favorite</NavLink>
    </li>
    <li>
      <DarkModeButton />
    </li>
  </ul>
};

export default NavLinks;