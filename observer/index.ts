import { WeatherStation } from "./WeatherStation";
import { Fan } from "./Fan";

const weatherStation = new WeatherStation();
new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
