import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-9">
                     
                <input type="search" placeholder="Enter a city" className="form-control search-input"/>
                
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                
            </div>
            </div>
            </form>
            <div className="WeatherInfo">
            <h1>New York</h1>
            <ul>
                <li>Wednesday, <span>19:00</span></li>
                <li>Cloudy</li>
            </ul>
            
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-8">
                    <div className="temp-container d-flex justify-content-end">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/>
                    <span className="current-temperature">18</span><span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: <strong>1%</strong></li>
                        <li>Humidity: <strong>69%</strong></li>
                        <li>Wind: <strong>10 km/h</strong></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}