import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>

          <span className="current-temp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="celsius"> °C</span>
        </div>

        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={props.data.icon} alt="Weather Icon" />
          </div>
          <div className="description">{props.data.description}</div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faDroplet} />
              <span> {props.data.humidity}</span>%
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} />
              <span> {Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
