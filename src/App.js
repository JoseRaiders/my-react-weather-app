import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Los Angeles" />
        <footer>
        <a href="https://github.com/JoseRaiders/my-react-weather-app" target="_blank" rel="noreferrer">Open source on GitHub</a>{" "}
        coded by <a href="https://jovial-ardinghelli-beabc4.netlify.app/about.html" target="_blank" rel="noreferrer">Anuska Jose</a>.
        </footer>
      </div>
    </div>
  );
}
