import React from 'react';

export default class GetStarted extends React.Component {
    render() {
      return (
        <div style={{marginLeft: '25%'}}>
              {/* Header */}
              <div className="w3-container w3-teal">
              <h1>React Getting Started</h1>
              </div>
  
              {/* Container */}
              <div className="w3-container">
              <h2>React Directly in HTML</h2>
              <p>The quickest way start learning React is to write React directly in your HTML files.
                Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.
                You will learn more about JSX in the React JSX chapter.
               </p>

              <h2>Setting up a React Environment</h2>
              <p>If you have NPM and Node.js installed, you can create a React application by first installing the create-react-app.</p>
              <p>Install create-react-app by running this command in your terminal:</p>
              <p>npm install -g create-react-app</p>

              <p>Then you are able to create a React application, let's create one called myfirstreact.
                Run this command to create a React application named myfirstreact:</p>
              <p>npx create-react-app myfirstreact</p>
              <p>The create-react-app will set up everything you need to run a React application.</p>

              <h2>Run the React Application</h2>
              <p>Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory:</p>
              <p>cd myfirstreact</p>
              <p>npm start</p>

              <p>A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.</p>


              </div> {/* Container */}
          </div> 
      );
    };
  }