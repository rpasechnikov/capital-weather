import { PointWeather } from '../models';

function WeatherTile(pointWeather: PointWeather) {
  return <div>{JSON.stringify(pointWeather)}</div>;
}

export default WeatherTile;
