import axios, { AxiosResponse } from 'axios';
import { PointWeather } from '../models';

const WeatherService = {
  getTestWeather(): Promise<PointWeather> {
    return axios
      .get('https://api.openweathermap.org/data/2.5/weather?lat=-37&lon=144&appid=d7c27ec41b2729645285babcff08df24')
      .then(function (response) {
        console.log(`Got weather data: ${JSON.stringify(response.data)}`);
        return getPointWeatherFromOpenWeatherResponse(response);
      });
  },

  getCapitalCitiesWeather(): PointWeather[] | null {
    return null;
  }
};

function getPointWeatherFromOpenWeatherResponse(response: AxiosResponse<any, any>): PointWeather {
  const { data } = response;

  return {
    id: data.id,
    name: data.name,
    coord: {
      lat: data.coord.lat,
      lon: data.coord.lon
    },
    weather: null,
    main: null,
    wind: null
  };
}

export default WeatherService;
