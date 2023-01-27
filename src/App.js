import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Lívia Laczová and is{" "}
          <a
            href="https://github.com/la-livia/shecodes-react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
