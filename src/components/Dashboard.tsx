import { useEffect, useState } from 'react';
import { WeatherReport } from '../models';
import WeatherService from '../services/weather.service';
import WeatherTile from './WeatherTile';

import './Dashboard.scss';

function Dashboard() {
  const [weatherReports, setWeatherReports] = useState<WeatherReport[]>([]);
  const [fetchWeatherData, setWeatherDataFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchWeatherData) {
      setWeatherDataFetchStatus(false);

      WeatherService.getCapitalCitiesWeather().then((weatherResponse) => setWeatherReports(weatherResponse));
    }
  }, [fetchWeatherData]);

  return (
    <div className="Dashboard">
      <h1>Capital Weather</h1>
      <div className="subtitle">Australian capital cities weather report</div>
      <div className="weather-tiles">
        {weatherReports.map((weatherReport) => (
          <WeatherTile key={weatherReport.name} {...weatherReport}></WeatherTile>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
