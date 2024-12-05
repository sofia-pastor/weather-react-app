import axios from "axios";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Saturday, 23:27",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="Enter a city.."
                autoFocus={true}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Porto</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-md-6 flex-container">
            <div className="weather-icon">
              <img src={weatherData.iconUrl} alt="weather-icon"></img>
            </div>
            <div className="temperature">{weatherData.temperature}</div>
            <div className="unit">°C</div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f81614abe2395d5dfecd45b9298041de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);

    return <h5>Loading</h5>;
  }
}
