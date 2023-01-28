import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div class="wrap-whole">
          <div className="wrap-board">
            <div>
              <FormattedDate date={weatherData.date} />
            </div>
            <form>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control search-form-border"
                  placeholder="Search for a city"
                  autocomplete="off"
                  ariadescribedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn form-button icon-button" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <button className="btn form-button icon-button" type="button">
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            </form>
            <div className="error-message"></div>

            <div className="row">
              <div className="col-6">
                <h1>{weatherData.city}</h1>

                <span className="current-temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="celsius"> °C</span>
              </div>

              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img src={weatherData.icon} alt="Weather Icon" />
                </div>
                <div class="description">{weatherData.description}</div>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faDroplet} />
                    <span> {weatherData.humidity}</span>%
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWind} />
                    <span> {Math.round(weatherData.wind)}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1df0aac02b4f8a54bc1aee5bafade766";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
