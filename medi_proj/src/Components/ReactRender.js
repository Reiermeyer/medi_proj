import React from 'react';

let renderHTMLExample =
`ReactDOM.render(Hello, document.getElementById('root'));
`;

let rootElementExample =
`<body>
    <div> id="root" </div>
</body>`;

let htmlCodeExample = 
`const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>   
);

ReactDOM.render(myelement, document.getElementById('root'));`

let squareRootExample =
`<body>
    <header> id="sandy"></header>
</body>`;

let renderSquareRootExample = 
`ReactDOM.render(Hallo, document.getElementById('sandy'));`;

export default class ReactRender extends React.Component {
    render() {
      return (
        <div style={{marginLeft: '25%'}}>
              {/* Header */}
              <div className="w3-container w3-teal">
              <h1>Reactjs Tutorial</h1>
              </div>
  
              {/* Container */}
            <div className="w3-container">
                <h2>Die Render-Funktion</h2>
                <p>React verwendet beim Rendern von HTML die Funktion
                    <span>ReactDOM.render()</span>.<br />
                    Dafür nimmt sie den HTML-Code und ein HTML-Element. Der Zweck der Funktion
                    besteht darin, den angegebenen HTML-Code innerhalb des angegebenen
                    HTML-Elements anzuzeigen.<br />
                    Darstellung eines Absatzes im "root"-Element:<br />
                </p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {renderHTMLExample}
                    </pre>
                </code>
                <p>Das Ergebnis erscheint im div id="root"-Element:</p>
                <code>
                    <pre>
                        {rootElementExample}
                    </pre>
                </code>

                <h2>Der HTML-Code</h2>
                <p>Erzeuge eine Variable, die HTML-Code enthält und lass sie im "root"-Knoten anzeigen:</p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {htmlCodeExample}
                    </pre>
                </code>

                <h2>Der Wurzelknoten</h2>
                <p>Der Wurzelknoten ist das HTML-Element, wo du dein Ergebnis anzeigen
                    lassen willst. Es ist wie ein container.
                </p>
                <p id="a">Es beginnt NICHT mit einem div-Element und benötigt KEIN id='root'.</p>
                <p id="c">Beispiel:</p>
                <code>
                    <pre>
                        {squareRootExample}
                    </pre>
                </code>

                <p> Das Ergebnis erscheint im header id="sandy" - Element:</p>
                <code>
                    <pre>
                        {renderSquareRootExample}
                    </pre>
                </code>

            </div>
          </div> 
      );
    };
  }