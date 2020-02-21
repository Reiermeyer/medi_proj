import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* Menu */}
        <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width: '25%'}}>
          <h3 className="w3-bar-item">Menu</h3>
          <a className="w3-bar-item w3-button">Link 1</a>
          <a className="w3-bar-item w3-button">Link 2</a>
          <a className="w3-bar-item w3-button">Link 3</a>
        </div> {/* Menu */}
        
        {/* Content */} 
        <div style={{marginLeft: '25%'}}>
          {/* Header */}
          <div className="w3-container w3-teal">
            <h1>Reactjs Tutorial</h1>
          </div> {/* Header */}

          {/* Container */}
          <div className="w3-container">
            <h2>Sidebar Navigation Example</h2>
            <p>The sidebar with is set with LUL.</p>
            <p>The left margin of the page content is set to the same value.</p>
          </div> {/* Container */}

        </div> {/* Content */} 
    </div>
  );
}

export default App;
