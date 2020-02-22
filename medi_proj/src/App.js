import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Intro from './Components/Intro.js';
import GetStarted from './Components/GetStarted.js';
import ReactES6 from './Components/ReactES6.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
          <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width: '25%'}}>
            <h3 className="w3-bar-item">Menu</h3>
            <Link className="w3-bar-item w3-button" to="/">Home</Link>
            <Link className="w3-bar-item w3-button" to="/intro">Intro</Link>
            <Link className="w3-bar-item w3-button" to="/getstarted">Get Started</Link>
            <Link className="w3-bar-item w3-button" to="/es6">React und ES6</Link>
          </div> {/* Menu */}
          
          <Switch>
            <Route path="/intro">
              <Intro />
            </Route>
            <Route path="/getstarted">
              <GetStarted />
            </Route>
            <Route path="/es6">
              <ReactES6 />
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

export default App;
