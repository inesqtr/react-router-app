import React from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import History from './History.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/our-history" activeStyle={{ color: "red" }}>History</NavLink></li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/our-history" component={History} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
