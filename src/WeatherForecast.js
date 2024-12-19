import { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState({ ready: false });

  useEffect(() => {
    setForecast({ ready: false });
  }, [props.city]);

  function handleResponse(response) {
    setForecast({
      ready: true,
      data: response.data.daily,
    });
  }

  function fetchApiData() {
    const sheCodesApiKey = "tb3fa10906d8aeb018ofce8736864bb2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${sheCodesApiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (forecast.ready) {
    return (
      <div className="WeatherForecast">
        <div className="container text-center">
          <div className="row">
            {forecast.data.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    fetchApiData();
    return <div>Loading forecast...</div>;
  }
}
