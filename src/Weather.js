import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "1df0aac02b4f8a54bc1aee5bafade766";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    const apiKey = "1df0aac02b4f8a54bc1aee5bafade766";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="wrap-whole">
          <div className="wrap-board">
            <div>
              <FormattedDate date={weatherData.date} />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control search-form-border"
                  placeholder="Search for a city"
                  autoComplete="off"
                  ariadescribedby="basic-addon2"
                  onChange={handleCitySearch}
                />
                <div className="input-group-append">
                  <button className="btn form-button icon-button" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <button
                  className="btn form-button icon-button"
                  type="button"
                  onClick={getCurrentPosition}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            </form>

            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
