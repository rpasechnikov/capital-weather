import axios, { AxiosResponse } from 'axios';
import { LatLon, PointWeather, WeatherCondition } from '../models';

const WeatherService = {
  async getCapitalCitiesWeather(): Promise<PointWeather[]> {
    const melbourneWeatherRequest = axios.get(
      getWeatherRequestUrlFromLatLon({
        lat: -37.813629,
        lon: 144.963058
      })
    );

    const adelaideWeatherRequest = axios.get(
      getWeatherRequestUrlFromLatLon({
        lat: -34.928497,
        lon: 138.600739
      })
    );

    const sydneyWeatherRequest = axios.get(
      getWeatherRequestUrlFromLatLon({
        lat: -33.86882,
        lon: 151.20929
      })
    );

    return await axios
      .all([melbourneWeatherRequest, adelaideWeatherRequest, sydneyWeatherRequest])
      .then((responses) => responses.map((response) => getPointWeatherFromOpenWeatherResponse(response)));
  }
};

function getWeatherRequestUrlFromLatLon(latLon: LatLon): string {
  return (
    `https://api.openweathermap.org/data/2.5/weather` +
    `?lat=${latLon.lat}` +
    `&lon=${latLon.lon}` +
    `&units=metric` +
    `&appid=d7c27ec41b2729645285babcff08df24`
  );
}

function getPointWeatherFromOpenWeatherResponse(response: AxiosResponse<any, any>): PointWeather {
  const { data } = response;

  return {
    id: data.id,
    name: data.name,
    coord: {
      lat: data.coord.lat,
      lon: data.coord.lon
    },
    weather: getWeatherConditionFromJson(data.weather),
    main: {
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure
    },
    wind: null
  };
}

function getWeatherConditionFromJson(weatherCondition: any[]): WeatherCondition[] {
  return weatherCondition.map(function (weatherCondition: any): WeatherCondition {
    return {
      id: weatherCondition.id,
      main: weatherCondition.main,
      description: weatherCondition.description,
      icon: weatherCondition.icon
    };
  });
}

export default WeatherService;
