import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Porto" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/sofia-pastor/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Sofia Pastor
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/sofia-pastor/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
