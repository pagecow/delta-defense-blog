import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './Components/HomePage/HomePage';
import DetailPage from './Components/DetailPage/DetailPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/detail-page' component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
