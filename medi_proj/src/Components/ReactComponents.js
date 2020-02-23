import React from 'react';

let componentExample =
`class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
}`;

let carComponentExample =
`ReactDOM.render(Car />, document.getElementById('root'));`;

let functionComponentExample = 
`function Car() {
    return <h2>Hi, I am also a Car!</h2>;
}`;

let renderComponentExample = 
`ReactDOM.render(Car />, document.getElementById('root'));`;

let constructorExample =
`class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    
    render() {
        return <h2>I am a Car!</h2>;
    }
}`;

let functionCallInRenderExample = 
`class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }

    render() {
        return <h2>I am a {this.state.color} Car!</h2>;
    }
}`;

let componentInComponentExample =
`class Car extends React.Component {
    render() {
      return <h2>I am a Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?/h1>
                <Car />
            </div>
        );
    }
}

ReactDOM.render(Garage />, document.getElementById('root'));`;

let componentInFileExample =
`import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

export default Car;`;


let importComponentExample = 
`import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

ReactDOM.render(Car />, document.getElementById('root'));`;

export default class ReactComponents extends React.Component {
    render() {
      return (
        <div style={{marginLeft: '25%'}}>
            {/* Header */}
            <div className="w3-container w3-teal">
                <h1>Reactjs Tutorial</h1>
            </div>
  
            {/* Container */}
            <div className="w3-container">
                <h2>React Komponenten</h2>
                <p>Komponenten sind unabhängige und wiederverwendbare Codebits.
                    Sie dienen dem gleichen Zweck wie JavaScript-Funktionen, arbeiten jedoch
                    isoliert und geben HTML über eine Render-Funktion zurück.<br />
                </p>
                <p id="a">Komponenten kann man in Klassen- und Funktionskomponenten unterteilen.</p>
                <p>In diesem Tutorial wirst du dich eher auf Klassenkomponenten konzentrieren.</p>
                <h2>Eine Klassenkomponente erstellen </h2>
                <p>Beim Erstellen einer React-Komponente muss der Name der Komponente
                    mit einem Großbuchstaben beginnen. Die Komponente muss die erweiterte
                    Anweisung <span>extends React.Component</span> enthalten, welches eine
                    Vererbung zu React.Component herstellt und dir Zugriff auf die Funktionen von
                    React.Component gewährt. <br />Die Komponente erfordert des Weiteren eine
                    Methode <span>render()</span>, welche HTML zurückgibt.
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {componentExample}    
                    </pre>
                </code>

                <p>  Die React-Anwendung hat die Komponente Car, welche ein <span>h2</span>
                    -Element zurückgibt. Nutze HTML-Syntax Car /, um die Komponente in deiner
                    Anwendung zu benutzen.<br />
                    Anzeige der Komponente Car im "root"-Element:
                </p>
                <code>
                    <pre>
                        {carComponentExample}    
                    </pre>
                </code>

                <h2>Eine Funktionskomponente erstellen</h2>
                <p>Hier wird das gleiche Beispiel dargestellt, mit dem Unterschied, dass eine
                    Funktionskomponente benutzt wird:
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {functionComponentExample}    
                    </pre>
                </code>      

                <p>Die React-Anwendung hat die Komponente Car und wird im "root"-Element
                    folgendermaßen dargestellt:<br />
                </p>
                <code>
                    <pre>
                        {renderComponentExample}    
                    </pre>
                </code>

                <h2>Komponentenkonstruktor</h2>
                <p>Wenn sich eine Konstruktor-Funktion <span>constructor()</span> in deiner
                    Komponente befindet, dann wird diese aufgerufen, wenn die Komponente
                    initialisiert wird. In der Konstruktor-Funktion initialisierst du
                    Eigenschaften der Komponente. Bei Reactjs beinhaltet ein Objekt namens
                    <span>state</span> alle Komponenteneigenschaften.<br />
                    Über <span>state</span> wirst du später etwas im Tutorial lernen.<br />
                    Die Vererbung parent-Komponenten berücksichtigst du ebenfalls mit der
                    Anweisung <span>super()</span>. Diese führt die Konstruktor-Funktionen der
                    übergeordneten Komponente aus und sorgt dafür, dass deine Komponente
                    Zugriff auf alle Funktionen der parent-Komponente hat
                    (<span>React-Component</span>).<br />
                    Erstelle die Konstruktor-Funktion in der Komponente Car und füge eine Farbe
                    hinzu:
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {constructorExample}    
                    </pre>
                </code>
                
                <p>Benutze die Farbeigenschaft in der Funktion <span>render()</span>:</p>
                <code>
                    <pre>
                        {functionCallInRenderExample}    
                    </pre>
                </code>

                <h2>Props</h2>
                <p>Eine andere Möglichkeit mit Komponenteneigenschaften umzugehen bieten
                    dir <span>props</span>. Diese sind ähnlich wie Funktionsargumente.
                    Du sendest sie als Attribute an die Komponente.<br />
                </p>
                <p id="a">Im nächsten Kapitel lernst du mehr über props.</p>
               

                <h2>Komponenten in Komponenten</h2>
                <p>Du kannst ebenfalls auf Komponenten innerhalb von Komponenten
                    verweisen. Verwende die Komponente Car in der Komponente Garage:
                </p>
                <code>
                    <pre>
                        {componentInComponentExample}    
                    </pre>
                </code>

                <h2>Komponenten in Dateien</h2>
                <p>In React geht um Wiederverwendung von Code. Manchmal kann es sinnvoll
                    sein, einige deiner Komponenten in seperaten Dateien zu packen.
                    Erstelle eine neue Datei mit der Endung .js und füge deinen Code dort
                    ein. Beachte, dass die Datei mit dem Importieren von React (wie zuvor)
                    beginnen muss und mit der Anweisung export default Car endet.
                    Eine neue Datei mit dem Namen "App.js":
                </p>
                <code>
                    <pre>
                        {componentInFileExample}    
                    </pre>
                </code>

                <p> Um die Komponente Car benutzen zu können, importiere die Datei in deine Anwendung:</p>
                <code>
                    <pre>
                        {importComponentExample}    
                    </pre>
                </code>
          </div>
        </div> 
      );
    };
  }