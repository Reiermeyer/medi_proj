import React from 'react';

export default class Intro extends React.Component {
    render() {
      return (
        <div style={{marginLeft: '25%'}}>
              {/* Header */}
              <div className="w3-container w3-teal">
              <h1>Reactjs Tutorial</h1>
              </div>
  
              {/* Container */}
              <div className="w3-container">
                <h2>Introduction</h2>
                <h3>What is React?</h3>
                <p>React is a JavaScript library created by Facebook. React is a tool for building UI components.</p>
                <h3>How does React Work?</h3>
                <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
                <p>React finds out what changes have been made, and changes only what needs to be changed. You will learn the various aspects of how React does this in the rest of this tutorial.</p>
              </div> {/* Container */}
          </div> 
      );
    };
  }