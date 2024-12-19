import { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });
  function handleResponse(response) {
    setForecastData({
      ready: true,
      data: response.data.daily,
    });
  }

  function fetchApiData() {
    const sheCodesApiKey = "tb3fa10906d8aeb018ofce8736864bb2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${sheCodesApiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastData.ready) {
    return (
      <div className="WeatherForecast">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecastData.data[0]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecastData.data[1]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecastData.data[2]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecastData.data[3]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecastData.data[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    fetchApiData();
    return <div>Loading forecast...</div>;
  }
}
