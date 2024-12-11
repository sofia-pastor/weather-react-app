import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="d-flex">
          <div className="temperature">{props.celsius} </div>
          <div className="unit">
            °C{" "}
            <a href="/" onClick={showFahrenheit}>
              | °F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheitValue = Math.round(props.celsius * (9 / 5) + 32);
    return (
      <div className="WeatherTemperature">
        <div className="d-flex">
          <div className="temperature">{fahrenheitValue} </div>
          <div className="unit">
            °F{" "}
            <a href="/" onClick={showCelsius}>
              | °C
            </a>
          </div>
        </div>
      </div>
    );
  }
}
