import React from 'react';

import screenshot from '../images/screenshot_myfirstreact.png';

let code = `
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; \n

class App extends Component { \n
    return (  \n
        <div className="App"> \n
            <header className="App-header"> \n
                <img src={logo} className="App-logo" alt="logo" />
                
                <p> 
                    Edit <code>src/App.js</code> and save to reload. 
                </p> 
                
                <a  
                    className="App-link" 
                    href="https://reactjs.org" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    Learn React
                </a>\n
            </header> \n
        </div> \n
        ); 
    } 
} \n

export default App;`

export default class GetStarted extends React.Component {
    
    splitString(string) {
        string.split("\n")
    }

    render() {
      return (
        <div style={{marginLeft: '25%'}}>
              {/* Header */}
              <div className="w3-container w3-teal">
              <h1>React Getting Started</h1>
              </div>
  
              {/* Container */}
              <div className="w3-container">
              <h2>React direkt in HTML</h2>
              <p>Für den Anfang ist es sehr einfach HTML direkt in der HTML Datei zu schreiben.<br />
                Dafür müssen drei JavaScript Bibliotheken importiert werden. Einmal 'react' und 'react-dom' um auf die Funktionen von Reactjs zuzugreifen und 'babel' um die JSX Syntax und den Javascript Standart ES6 in älteren Browsern zu nutzen. 
               </p>

              <h2>Aufsetzen der React Umgebung</h2>
              <p>nodejs und npm (Node Package Manager) müssen instaliert werden bevor mit der Reactjs Entwicklung begonnen werden kann.</p>
              <p>Als nächstes muss create-react-app installiert indem folgernder Befehl im Terminal gemacht wird:</p>
              <code>npm install -g create-react-app</code>

              <p>Jetzt kann eine React Anwendung mit dem Namen myfirstreact erstellt werden. Führe diesen Befehl aus um die Anwendung zu erstellen:</p>
              <code>npx create-react-app myfirstreact</code>
              <p>Dieser Befehl installiert alle nötigen Javascript Bibliotheken, erstellt ein Node Projekt und die nötigen Dateien um ein simples React Programm auszuführen.</p>

              <h2>Ausführen der React Anwendung</h2>
              <p>Jetzt kann die erste React Anwendung gestartet werden! Gehe mit diesem Befehl in den myfirstreact Ordner und starte die Anwendung:</p>
              <code>cd myfirstreact</code>
              <code>npm start</code>

              <p>Es sollte automatisch ein Browser geöffnet werden mit der React Seite offen! Falls nicht findest du die Anwendung indem du localhost:3000 in die Adressleiste des Browsers eingibst.</p>
              
              <img src={screenshot}></img>

             <h2>Bearbeiten der React Anwendung</h2>
                <p>Im myfirstreact Ordner, befindet sich ein src Ordner. In diesem src ist eine Javascript Datei App.js, öffne sie und sie sollte wie folgt aussehen:</p>
                <pre>
                    <code>
                        <p>
                            {code.split("\n").map((item) => {
                                return ([item, <br />]);
                            })}
                    </p>

                    </code>
                </pre>
              </div> {/* Container */}
          </div> 
      );
    };
  }