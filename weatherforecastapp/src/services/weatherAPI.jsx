import axios from "axios";
import moment from "moment";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const APP_KEY = "9adc8c21da16df48ff74ef05a9727c0f";
const defaultLat = "50.45";
const defaultLng = "30.52";

export const getWeatherByLocation = async (lat, lng) => {
  try {
    const weather = await axios.get(
      `${BASE_URL}weather?lat=${lat || defaultLat}&lon=${lng ||
        defaultLng}&appid=${APP_KEY}&units=metric`
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
      sunriseHours: new Date(weather.data.sys.sunrise * 1000).getHours(),
      sunriseMinutes: new Date(weather.data.sys.sunrise * 1000).getMinutes(),
      sunsetHours: new Date(weather.data.sys.sunset * 1000).getHours(),
      sunsetMinutes: new Date(weather.data.sys.sunset * 1000).getMinutes()
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
      sunriseHours: new Date(weather.data.sys.sunrise * 1000).getHours(),
      sunriseMinutes: new Date(weather.data.sys.sunrise * 1000).getMinutes(),
      sunsetHours: new Date(weather.data.sys.sunset * 1000).getHours(),
      sunsetMinutes: new Date(weather.data.sys.sunset * 1000).getMinutes()
    };
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherFor5days = async (lat, lng) => {
  try {
    const weatherFor5days = await axios.get(
      `${BASE_URL}forecast?lat=${lat || defaultLat}&lon=${lng ||
        defaultLng}&appid=${APP_KEY}&units=metric`
    );

    const weatherData = weatherFor5days.data;

    const searchAverageTempFromFiveDay = weatherData => {
      let arrOfFiveDayWeatherObject = [];
      let arrOfAverageTemp = [];
      let arrOfAverageHumidity = [];
      let arrOfPressure = [];
      let arrOfWindSpeed = [];

      for (let i = 0; i < 5; i++) {
        let startDay = moment()
          .add(i, "days")
          .startOf("day")
          .format("X");

        let endDay = moment()
          .add(i, "days")
          .endOf("day")
          .format("X");
        let dayArr = weatherData.list.filter(
          el => el.dt < endDay && el.dt > startDay
        );
        arrOfFiveDayWeatherObject.push(dayArr);
        let averageTemp = Math.floor(
          dayArr.reduce((acc, el) => acc + el.main.temp, 0) / dayArr.length
        );
        arrOfAverageTemp.push(averageTemp);
        let averageHumidity = Math.floor(
          dayArr.reduce((acc, el) => acc + el.main.humidity, 0) / dayArr.length
        );
        arrOfAverageHumidity.push(averageHumidity);
        let averagePressure = Math.floor(
          dayArr.reduce((acc, el) => acc + el.main.pressure, 0) /
            dayArr.length /
            1.33
        );
        arrOfPressure.push(averagePressure);
        let averageWind = Math.floor(
          dayArr.reduce((acc, el) => acc + el.wind.speed, 0) / dayArr.length
        );
        arrOfWindSpeed.push(averageWind);
      }
      return {
        ...weatherData,
        arrOfFiveDayWeatherObject: arrOfFiveDayWeatherObject,
        arrOfAverageTemp: arrOfAverageTemp,
        arrOfAverageHumidity: arrOfAverageHumidity,
        arrOfPressure: arrOfPressure,
        arrOfWindSpeed: arrOfWindSpeed
      };
    };

    return searchAverageTempFromFiveDay(weatherData);
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherFor5daysByCity = async city => {
  try {
    const weatherFor5days = await axios.get(
      `${BASE_URL}forecast?q=${city}&appid=${APP_KEY}&units=metric`
    );
    const weatherData = weatherFor5days.data;

    const searchAverageTempFromFiveDay = weatherData => {
      let arrOfFiveDayWeatherObject = [];
      let arrOfAverageTemp = [];
      let arrOfAverageHumidity = [];
      let arrOfPressure = [];
      let arrOfWindSpeed = [];

      for (let i = 0; i < 5; i++) {
        let startDay = moment()
          .add(i, "days")
          .startOf("day")
          .format("X");

        let endDay = moment()
          .add(i, "days")
          .endOf("day")
          .format("X");
        let dayArr = weatherData.list.filter(
          el => el.dt < endDay && el.dt > startDay
        );
        arrOfFiveDayWeatherObject.push(dayArr);
        let averageTemp = Math.floor(
          dayArr.reduce((acc, el) => acc + el.main.temp, 0) / dayArr.length
        );
        arrOfAverageTemp.push(averageTemp);
        let averageHumidity = Math.floor(
          dayArr.reduce((acc, el) => acc + el.main.humidity, 0) / dayArr.length
        );
        arrOfAverageHumidity.push(averageHumidity);
        let averagePressure = Math.floor(
          dayArr.reduce((acc, el) => acc + el.main.pressure, 0) /
            dayArr.length /
            1.33
        );
        arrOfPressure.push(averagePressure);
        let averageWind = Math.floor(
          dayArr.reduce((acc, el) => acc + el.wind.speed, 0) / dayArr.length
        );
        arrOfWindSpeed.push(averageWind);
      }
      return {
        ...weatherData,
        arrOfFiveDayWeatherObject: arrOfFiveDayWeatherObject,
        arrOfAverageTemp: arrOfAverageTemp,
        arrOfAverageHumidity: arrOfAverageHumidity,
        arrOfPressure: arrOfPressure,
        arrOfWindSpeed: arrOfWindSpeed
      };
    };

    return searchAverageTempFromFiveDay(weatherData);
  } catch (error) {
    console.log(error);
  }
};
