import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import './Weather.css';

export default function Weather(props) {
    const [city, setCity] = useState(props.city);
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
      setWeatherData({
          ready: true,
          city: response.data.name,
          country: response.data.sys.country,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          desscription: response.data.weather[0].description,
          date: new Date(response.data.dt * 1000),
          icon: response.data.weather[0].icon
      });
  }

  function search() {
    const apiKey = "754ef6f31ce264860cfc37f3accd1fdf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
        <div className="WeatherData">
            <form onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-sm-9">
                    <input type="search" placeholder="Enter city" className="form-control" onChange={handleCityChange} />
                </div>
                <div className="col-sm-3">
                    <input type="submit" value="Search" className="btn btn-dark w-100" />
                </div>
            </div>
            </form>
            <WeatherInfo data={weatherData} />
        </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#000000" height={100} width={100} />;
  }
}
