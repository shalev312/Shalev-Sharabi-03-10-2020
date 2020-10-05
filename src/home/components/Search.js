import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SearchImg from './Search.png';
import './Search.css'

const Search = () => {
  const [searchTxtState, setSearchTxtState] = useState('');

  return <div className="search-box">
    <input className="search-txt" onChange={(e) => setSearchTxtState(e.target.value)} type="text" value={searchTxtState} placeholder="Type a City Name.." />
    <Link onClick={() => setSearchTxtState("")} to={`/${searchTxtState}`} className="search-btn">
      <img src={SearchImg} alt="Search" />
    </Link>
  </div>
}

export default Search;