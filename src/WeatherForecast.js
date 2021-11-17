import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "754ef6f31ce264860cfc37f3accd1fdf";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-sm">
                    <div className="WeatherForecastDay">Thu</div>
                    <WeatherIcon code="01d" size={50} />
                    <div className="WeatherForecastTemperatures">
                        <span className="WeatherForecastTemperatures-max">19°</span>
                        <span className="WeatherForecastTemperatures-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}