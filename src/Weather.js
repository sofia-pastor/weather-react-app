import axios from "axios";
import { useState } from "react";
import WeatherUI from "./WeatherUI";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
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
        <WeatherUI data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "f81614abe2395d5dfecd45b9298041de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);

    return <h5>Loading</h5>;
  }
}
