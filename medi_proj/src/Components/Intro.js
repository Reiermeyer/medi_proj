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
                <h2>Einführung</h2>
                <h3>Was ist React?</h3>
                <p>React ist eine Javascript Bibliothek von Facebook mit der BSD-Linzens veröffentlicht. <br/>
                    Sie dient dazu moderne Webanwendung mit hoher Performance und modularem, leicht nachzuvollziehendem Frontend-Code.  <br/>
                    Seitdem nutzen viele große Websites React, darunter Facebook, Instagram, AirBnB, Yahoo,..
                </p>
                <h3>Wie arbeitet React?</h3>
                <p>Statt die HTML DOM Elemente zu manipulieren erstellt React einen viruellen DOM durch den sehr hohe Render-Geschwindigkeiten erreicht werden können. <br/>
                    React wird in Components strukturiert, die jeweils den HTML und den Javascript Code für ein Modul der Website enthalten. <br/> 
                    Eine Component Rendert jeweils eine Ansicht und verfügt über einen State der von den übergeordneten Components durchgereicht wird.  <br/>
                    React Components updaten die Ansicht automatisch wenn sich der State ändert, dabei wird der virtuelle DOM zuerst manipuliert, damit React am eigentlichen DOM erkennt was wirklich geändert werden muss.
                </p>
              </div>
          </div> 
      );
    };
  }