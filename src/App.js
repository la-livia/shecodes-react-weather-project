import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bratislava" />
        <footer>
          <a
            href="https://github.com/la-livia/shecodes-react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Lívia Laczová
        </footer>
      </div>
    </div>
  );
}
