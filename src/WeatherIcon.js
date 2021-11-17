import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUD_DAY",
        "02n": "PARTLY_CLOUD_NIGHT",
        "03d": "PARTLY_CLOUD_DAY",
        "03n": "PARTLY_CLOUD_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "SLEET",
        "11n": "SLEET",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    };

    if(props.code === "01d") {
        return (
            <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="#dfdf00"
            size={props.size}
            animate={true}
            />
        );
    } else {
        return (
            <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="#28292d"
            size={props.size}
            animate={true}
            />
        );
    }
}