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
          <li><NavLink exact to="/" activeStyle={{ color: "red" }}>Home</NavLink></li>
          <li><NavLink exact to="/our-history" activeStyle={{ color: "red" }}>History</NavLink></li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/our-history" component={History} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
