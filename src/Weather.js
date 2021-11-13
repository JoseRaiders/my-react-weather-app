import React from "react";
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather px-3 my-4">
        <form>
        <div className="row my-4">
            <div className="col-9">
                <input type="search" placeholder="Enter city" className="form-control" />
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-dark" />
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
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear" /> 75°F
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
