import axios from "axios";
import { useState } from "react";
import WeatherUI from "./WeatherUI";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }
  const [image, setImage] = useState(null);

  function displayCityImg(response) {
    setImage(response.data.results[2].urls.regular);
  }

  function search() {
    const weatherApiKey = "f81614abe2395d5dfecd45b9298041de";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    axios.get(weatherApiUrl).then(displayWeather);

    const imgApiKey = "MWykxzB0Qh71p7qxFsQcD8VqEJVRZGezR14417o4RPM";
    const imgApiUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${imgApiKey}`;

    axios.get(imgApiUrl).then(displayCityImg);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  let backgroundStyle = {};

  if (image) {
    backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${image})`,
    };
  }

  if (weatherData.ready) {
    return (
      <div className="Weather" style={backgroundStyle}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Enter a city.."
                autoFocus={true}
                className="form-control"
                onChange={handleCityInput}
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="btn w-100 button"
              />
            </div>
          </div>
        </form>
        <WeatherUI data={weatherData} image={image} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return <h5>Loading</h5>;
  }
}
