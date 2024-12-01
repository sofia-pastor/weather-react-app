export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Enter a city.."
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
      <h1>Porto</h1>
      <ul>
        <li>Saturday, 23:27</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
          ></img>
          18°C
        </div>
        <div className="col-md-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 60%</li>
            <li>Wind: 16km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
