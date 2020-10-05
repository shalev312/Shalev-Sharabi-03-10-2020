import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import {homeReducer} from './redux/reducers/homeReducer';
import App from './App';
import './index.css';

const store = createStore(homeReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
