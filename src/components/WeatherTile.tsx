import { WeatherCondition, WeatherReport } from '../models';

import './WeatherTile.scss';

function WeatherTile(weatherReport: WeatherReport) {
  return (
    <div className="WeatherTile">
      <div className="city-name">{weatherReport.name}</div>
      <div className="weather">
        <img src={getIconUrlFromWeatherConditions(weatherReport.weather)} alt="Weather icon" />
        <div className="temp-pressure-humidity">
          <div>
            <span className="key">Temp:</span>{' '}
            <span className="value">{weatherReport.main ? Math.round(weatherReport.main?.temp) : ''}</span> C
          </div>
          <div>
            <span className="key">Humidity:</span> <span className="value">{weatherReport.main?.humidity}</span> %
          </div>
          <div>
            <span className="key">Pressure:</span> <span className="value">{weatherReport.main?.pressure}</span> hPa
          </div>
          <div>
            <span className="key">Conditions:</span>{' '}
            <span className="value">{weatherReport.weather ? weatherReport.weather[0].description : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getIconUrlFromWeatherConditions(weatherConditions: WeatherCondition[] | null): string {
  // Fallback in case there's no icon - use clear skies. TODO?
  if (!weatherConditions) {
    return 'http://openweathermap.org/img/wn/01d@2x.png';
  }

  return `http://openweathermap.org/img/wn/${weatherConditions[0].icon}@2x.png`;
}

export default WeatherTile;
