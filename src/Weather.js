import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="wrap-whole">
        <div className="wrap-board">
          <div>January 27</div>
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
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="btn form-button icon-button" type="button">
                <i className="fa fa-map-marker"></i>
              </button>
            </div>
          </form>
          <div className="error-message"></div>

          <div className="row">
            <div className="col-6">
              <h1>Bratislava</h1>

              <span className="current-temp">1</span>
              <span className="celsius"> °C</span>
            </div>

            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src="" alt="Cloudy" />
              </div>
              <div class="description">Snow</div>
              <ul>
                <li>
                  <i class="fa-solid fa-droplet font-icon">7</i>
                  <span>8</span>%
                </li>
                <li>
                  <i class="fa-solid fa-wind font-icon"></i>
                  <span>0</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
