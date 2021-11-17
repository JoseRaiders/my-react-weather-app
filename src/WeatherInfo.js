import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}, {props.data.country}</h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.desscription}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-sm-6 ps-1 pb-3">
                    <div className="d-flex">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={64} />
                        </div>
                        <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 pt-2 pb-4">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}