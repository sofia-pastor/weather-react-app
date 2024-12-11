import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherUI(props) {
  return (
    <div className="WeatherUI">
      <h1>{props.data.city}</h1>
      <div className="time">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-sm-6 justify-content-center d-flex">
          <div>
            <WeatherIcon code={props.data.icon} />
          </div>

          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-sm-6 d-flex justify-content-center">
          <ul className="">
            <li className="text-capitalize fw-semibold">
              {props.data.description}
            </li>
            <li>
              {" "}
              <span className="fw-semibold">Humidity:</span>{" "}
              {props.data.humidity}%
            </li>
            <li>
              <span className="fw-semibold">Wind:</span> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
