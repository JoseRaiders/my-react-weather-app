import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}, {props.data.country}</h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.desscription}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6 ps-1">
                    <div className="d-flex">
                        <img src={props.data.icon} alt="{weather.description}" className="float-left" />
                        <div className="float-left">
                            <span className="temperature">{Math.round(props.data.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}