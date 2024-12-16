import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecst() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={42} />
          <div className="forecast-temperatures">
            <span className="forecast-max">19°</span>{" "}
            <span className="forecast-min">| 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
