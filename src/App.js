import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Favorites from './favorites/pages/Favorites';
import Home from './home/pages/Home';

const App = () => {
  const darkMode = useSelector(state => state.darkMode);

  return (
    <div className={`app ${darkMode && "dark-mode"}`}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
            <Route path="/:cityName">
              <Home />
            </Route>
            <Redirect to="/Tel Aviv" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
