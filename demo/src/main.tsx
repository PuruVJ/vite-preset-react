import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "./HelloWorld";

function App() {
  return (
    <div>
      <h1>Hello from Preact</h1>
      <h2>Compat</h2>
      <HelloWorld />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app")!);
