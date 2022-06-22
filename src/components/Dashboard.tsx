import { useEffect, useState } from 'react';
import WeatherService from '../services/weather.service';

function Dashboard() {
  const [weather, setWeather] = useState<any>(null);
  const [fetchWeatherData, setWeatherDataFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchWeatherData) {
      setWeatherDataFetchStatus(false);

      WeatherService.getTestWeather().then((weatherResponse) => setWeather(JSON.stringify(weatherResponse)));
    }
  }, [fetchWeatherData]);

  return <div>{weather}</div>;
}

export default Dashboard;
