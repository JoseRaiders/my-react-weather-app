import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import './Weather.css';

export default function Weather(props) {
    const [weather, setWeather] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
      setWeather({
          ready: true,
          city: response.data.name,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          desscription: response.data.weather[0].description,
          date: "Friday, 7:30 PM",
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
  }

  if (weather.ready) {
    return (
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter city" className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-dark w-100" />
                </div>
            </div>
            </form>
            <h1>{weather.city}</h1>
            <ul>
                <li>{weather.date}</li>
                <li className="text-capitalize">{weather.desscription}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6 ps-1">
                    <div className="d-flex">
                        <img src={weather.icon} alt="{weather.description}" className="float-left" />
                        <div className="float-left">
                            <span className="temperature">{Math.round(weather.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {weather.wind} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  } else {
    const apiKey = "754ef6f31ce264860cfc37f3accd1fdf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <Loader type="ThreeDots" color="#000000" height={100} width={100} />;
  }
}
