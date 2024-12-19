import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function time() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function iconCode() {
    let icon = props.data.condition.icon;
    return icon;
  }

  function maxTemp() {
    let max = Math.round(props.data.temperature.maximum);
    return max;
  }

  function minTemp() {
    let min = Math.round(props.data.temperature.minimum);
    return min;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="container text-center">
        <div className="forecast-day">{time()}</div>
        <WeatherIcon code={iconCode()} size={42} />
        <div className="forecast-temperatures">
          <span className="forecast-max">{maxTemp()}°</span>{" "}
          <span className="forecast-min">| {minTemp()}°</span>
        </div>
      </div>
    </div>
  );
}
