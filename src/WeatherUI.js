import FormattedDate from "./FormattedDate";

export default function WeatherUI(props) {
  return (
    <div className="WeatherUI">
      <h1>{props.data.city}</h1>
      <div className="time">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col-sm-6 justify-content-center d-flex flex-container">
          <div className="weather-icon">
            <img src={props.data.iconUrl} alt="weather-icon"></img>
          </div>
          <div className="temperature">{props.data.temperature}</div>
          <div className="unit">°C</div>
        </div>
        <div className="col-sm-6 d-flex justify-content-center">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
