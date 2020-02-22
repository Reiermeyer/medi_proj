import React from 'react';

let jsxExample = 
`const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById('root'));`;

let jsxEpxressionsExample =
`const myelement = h1>React is {5 + 5} times better with JSX/h1>;`

let htmlBlockExample =
`const myelement = (
    <ul>
        <li>
            Apples
        </li>
        <li>
            Bananas
        </li>
        <li>
            Cherries
        </li>
    </ul>
);`;

let topElementExample = 
`const myelement = (
    <div>
      <h1>I am a Header.</h1>
      <h1>I am a Header too.</h1>
    </div>
  );`;

export default class ReactJSX extends React.Component {
    render() {
      return (
        <div style={{marginLeft: '25%'}}>
            {/* Header */}
            <div className="w3-container w3-teal">
            <h1>Reactjs Tutorial</h1>
            </div>
  
            {/* Container */}
            <div className="w3-container">
                <h2>Was ist JSX?</h2>
                <p>JSX bedeutet JavaScript XML. <br />Es erlaubt dir HTML in React
                    zu ergänzen und hineinzuschreiben. 
                </p>
                <p id="a">JSX muss nicht verwenden, es erleichtert aber das Erstellen von
                    React-Anwendungen.
                </p>
                <p>JSX konvertiert HTML tags in React-Elemente.</p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {jsxExample}
                    </pre>
                </code>
                <p>Wie du siehst, erlaubt dir JSX HTML-Code direkt in JavaScript-Code
                    hineinzuschreiben. JSX ist eine Erweiterung der auf ES6 basierenden
                    Sprache JavaScript und wird zur Laufzeit in reguläres JavaScript übersetzt.
                </p>

                <h2>Ausdrücke in JSX</h2>
                <p>Mit JSX kannst du Ausdrücke in geschweifte Klammern <span>{ }</span>
                    schreiben.<br />
                </p>
                <p>Dies kann zum Beispiel eine Addition sein:</p>
                <code>
                    <pre>
                        {jsxEpxressionsExample}
                    </pre>
                </code>

                <h2>Einfügen eines großen HTML-Blocks</h2>
                <p>Wenn du HTML in mehrere Zeilen schreibst, setze Klammern rundherum.</p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {htmlBlockExample}
                    </pre>
                </code>

                <h2> One Top Level Element</h2>
                    <p>Der HTML-Code muss in EIN Element der obersten Ebene eingeschlossen
                    werden.<br /> Wenn du zwei Überschriften schreiben willst, musst du diese in ein
                    parent-Element wie z.B. ein <span>div</span>-Element packen.
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {topElementExample}
                    </pre>
                </code>
                <p id="a">JSX folgt den Regeln von XML. Deswegen müssen HTML-Elemente richtig
                    geschlossen werden. Ansonsten gibt JSX einen Fehler aus. 
                </p>
            </div>
        </div> 
      );
    };
  }