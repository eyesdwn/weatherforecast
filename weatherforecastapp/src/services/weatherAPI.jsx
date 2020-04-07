import axios from "axios";
import _ from "lodash";
import moment from "moment";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const APP_KEY = "9adc8c21da16df48ff74ef05a9727c0f";

export const getWeatherByLocation = async () => {
  try {
    const weather = await axios.get(
      `${BASE_URL}weather?lat=50.43&lon=30.52&appid=${APP_KEY}&units=metric`
    );

    const weatherData = {
      ...weather.data,
      city: weather.data.name,
      country: weather.data.sys.country,
      pressure: weather.data.main.pressure,
      humidity: weather.data.main.humidity,
      wind: weather.data.wind.speed,
      temp: Math.floor(weather.data.main.temp),
      feelsLike: Math.floor(weather.data.main.feels_like),
      description: weather.data.weather[0].description
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(" "),
      hours: new Date(weather.data.dt * 1000).getHours(),
      minutes: new Date(weather.data.dt * 1000).getMinutes(),
      time: moment
        .utc(weather.data.dt)
        .local()
        .format("HH:mm"),
      sunrise: `${new Date(
        weather.data.sys.sunrise * 1000
      ).getHours()}:${new Date(weather.data.sys.sunrise * 1000).getMinutes()}`,
      sunset: `${new Date(
        weather.data.sys.sunset * 1000
      ).getHours()}:${new Date(weather.data.sys.sunset * 1000).getMinutes()}`
    };
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherByCity = async city => {
  try {
    const weather = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${APP_KEY}&units=metric`
    );

    const weatherData = {
      ...weather.data,
      city: weather.data.name,
      country: weather.data.sys.country,
      pressure: weather.data.main.pressure,
      humidity: weather.data.main.humidity,
      wind: weather.data.wind.speed,
      temp: Math.floor(weather.data.main.temp),
      feelsLike: Math.floor(weather.data.main.feels_like),
      description: weather.data.weather[0].description
        .split(/\s+/)
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(" "),
      hours: new Date(weather.data.dt * 1000).getHours(),
      minutes: new Date(weather.data.dt * 1000).getMinutes(),
      time: moment(weather.data.dt).format("LT"),
      sunrise: `${new Date(
        weather.data.sys.sunrise * 1000
      ).getHours()}:${new Date(weather.data.sys.sunrise * 1000).getMinutes()}`,
      sunset: `${new Date(
        weather.data.sys.sunset * 1000
      ).getHours()}:${new Date(weather.data.sys.sunset * 1000).getMinutes()}`
    };
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherFor5days = async () => {
  try {
    const weatherFor5days = await axios.get(
      `${BASE_URL}forecast?lat=50.43&lon=30.52&appid=${APP_KEY}&units=metric`
    );
    const weatherData = weatherFor5days.data.list;
    const sortedWeatherDataByDate = _.keyBy(weatherData, item =>
      moment(item.dt_txt).format("LLLL")
    );
    return sortedWeatherDataByDate;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherFor5daysByCity = async city => {
  try {
    const weatherFor5days = await axios.get(
      `${BASE_URL}forecast?q=${city}&appid=${APP_KEY}&units=metric`
    );
    const weatherData = weatherFor5days.data.list;
    const sortedWeatherDataByDate = _.keyBy(weatherData, item => item.dt);
    return sortedWeatherDataByDate;
  } catch (error) {
    console.log(error);
  }
};
