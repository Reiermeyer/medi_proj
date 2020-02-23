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
import ReactRender from './Components/ReactRender.js'
import ReactJSX from './Components/ReactJSX.js'
import ReactComponents from './Components/ReactComponents.js';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Menu */}
          <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width: '25%'}}>
            <h3 className="w3-bar-item">Reactjs Tutorial</h3>
            <Link className="w3-bar-item w3-button" to="/">Home</Link>
            <Link className="w3-bar-item w3-button" to="/intro">Intro</Link>
            <Link className="w3-bar-item w3-button" to="/getstarted">Get Started</Link>
            <Link className="w3-bar-item w3-button" to="/es6">React ES6</Link>
            <Link className="w3-bar-item w3-button" to="/renderhtml">React Render</Link>
            <Link className="w3-bar-item w3-button" to="/jsx">React JSX</Link>
            <Link className="w3-bar-item w3-button" to="/components">React Components</Link>
          </div>
          
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
            <Route path="/renderhtml">
              <ReactRender />
            </Route>
            <Route path="/jsx">
              <ReactJSX />
            </Route>
            <Route path="/components">
              <ReactComponents />
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

export default App;
