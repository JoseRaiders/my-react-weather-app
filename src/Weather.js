import React from "react";
import './Weather.css';

export default function Weather() {
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
        <h1>Los Angeles</h1>
        <ul>
            <li>Friday, 6:34 PM</li>
            <li>Clear</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear" /> 
                <span className="temperature">75</span>
                <span className="unit">°F</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: 26%</li>
                    <li>Wind: 0 mph</li>
                </ul>
            </div>
        </div>
    </div>
  );
}
