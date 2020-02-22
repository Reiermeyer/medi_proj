import React from 'react';

let classExample = 
`class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model
    }
}

mycar = new Model("Ford", "Mustang");
mycar.show();`;

let noArrowFunctionExample = 
`
hello = function() {
  return "Hello World!";
}`;

let arrowFunctionExample = 
`
hello = () => {
    return "Hello World!";
}`;

let thisExample = 
`class Header {
    constructor() {
      this.color = "Red";
  }

    //Regular function:
    changeColor = function() {
      document.getElementById("demo").innerHTML += this;
    }
  }
  
myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);`;

let thisArrowExample =
`class Header {
    constructor() {
      this.color = "Red";
    }

    //Arrow function:
    changeColor = () => {
      document.getElementById("demo").innerHTML += this;
    }
}
  
myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);`;

export default class ReactES6 extends React.Component {
    render() {
      return (
        <div style={{marginLeft: '25%'}}>
            {/* Header */}
            <div className="w3-container w3-teal">
                <h1>Reactjs Tutorial</h1>
            </div>
  
            {/* Container */}
            <div className="w3-container">
                <h2>Was ist ES6?</h2>
                <p>ES6 steht für ECMAScript 6.<br /> Es wurde eingeführt um JavaScript zu
                    standardisieren.<br /> ES6 ist die sechste Version von ECMAScript.</p>

                <h2>Klassen</h2>
                <p>ES6 führt Klassen ein. Um eine Klasse zu initialisieren benutzt man das
                    Wort <span>class</span>. <br />Die Eigenschaften dieser Klassen kommen in den
                    <span> constructor() </span>.Anschließend kannst du Methoden -
                    sogenannte Funktionen der Klasse - hinzufügen.
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {classExample}
                    </pre>
                </code>
                <p>
                    Die Methode <span>super()</span> verweist auf die parent-Klasse.
                </p>

                <h2>Pfeilfunktionen</h2>
                <p>Pfeilfunktionen erlauben kürzere Funktionen-Syntax zu schreiben.
                    Um den Unterschied sichtbar zu machen hier ein
                </p>
                <p id="c">Vorher-Nachher-Beispiel:</p>
                <p>Ohne Pfeilfunktion:</p>
                <code>
                    <pre>
                        {noArrowFunctionExample}
                    </pre>
                </code>
                <p>Mit Pfeilfunktion:</p>
                <code>
                    <pre>
                        {arrowFunctionExample}
                    </pre>
                </code>

                <h2>Das <span>this</span></h2>
                <p>In Pfeilfunktionen gibt es keine Bindung von <span>this</span>.
                    Es stellt das Objekt dar, das die Pfeilfunktion definiert.
                    In normalen Funktionen stellt dieses Schlüsselwort das Objekt dar, welches
                    die Funktion aufruft.<br />
                    Bei einer regulären Funktion stellt <span>this</span> das Objekt dar,
                    welches die Funktion aufgerufen hat:
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {thisExample}
                    </pre>
                </code>
                <p> Bei einer Pfeilfunktion stellt <span>this</span> das Header-Objekt dar -
                    unabhängig davon, womit die Funktion aufgerufen wird:
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {thisArrowExample}
                    </pre>
                </code>
                <p id="a">Erinnere dich immer daran, wenn du mit Funktionen arbeitest!</p>
                
                <h2>Variablen</h2>
                <p>Mit ES6 gibt es drei Möglichkeiten Variablen zu definieren:<br/>
                    - <span>var</span><br />
                    - <span>let </span><br />
                    - <span>const </span><br />
                </p>
                <p>Wenn du <span>var</span> außerhalb einer Funktion benutzt, besitzt es einen
                    globalen Geltungsbereich.<br />
                    Kommt <span>var</span> innerhalb einer Funktion vor, bezieht es sich
                    nur auf diese Funktion. <br />
                    Wenn du <span>var</span> zum Beispiel in einer Schleife benutzt, ist die Variable
                    auch außerhalb der Schleife verfügbar.
                </p>
                <p id="a">var hat einen Funktionsbreich, keinen Blockbereich.</p>
                <p id="a">let besitzt einen Blockbereich.</p>
                <p>Dass heißt eine <span>let</span> -Variable ist nur in einer Schleife gültig.<br />
                    Eine <span>const</span>-Variable kann man nach einer Deklaration nicht mehr
                    verändern.
                </p>
                <p id="a">const-Variablen besitzen einen Blockbereich.</p>
            </div>
        </div> 
      );
    };
  }