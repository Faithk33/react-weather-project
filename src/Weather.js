import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <div className="row">
                <div className="col-3">
                    <form>
                <input type="search" placeholder="Enter a city" className="form-control"/>
                </form>
            </div>
            <div className="col-9">
                <input type="submit" value="Search" className="btn btn-primary"/>
            </div>
            </div>
            <h1>New York</h1>
            <ul>
                <li>Wednesday, 19:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/>
                    18°C
            
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 1%</li>
                        <li>Humidity: 69%</li>
                        <li>Wind: 10 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}