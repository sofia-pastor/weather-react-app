import FormattedDate from "./FormattedDate";

export default function WeatherUI(props) {
  return (
    <div className="WeatherUI">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-md-6 flex-container">
          <div className="weather-icon">
            <img src={props.data.iconUrl} alt="weather-icon"></img>
          </div>
          <div className="temperature">{props.data.temperature}</div>
          <div className="unit">°C</div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
