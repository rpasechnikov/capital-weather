import { LatLon } from './lat-lon';
import { TemperaturePressureHumidity } from './temperature-pressure-humidity';
import { WeatherCondition } from './weather-condition';
import { WindCondition } from './wind-condition';

/** Represents a response (with props we care about) from
 * https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 * See: https://openweathermap.org/current */
export interface WeatherReport {
  id: number;
  /** City name */
  name: string;

  coord: LatLon;
  weather: WeatherCondition[] | null;
  main: TemperaturePressureHumidity | null;
  wind: WindCondition | null;
}
