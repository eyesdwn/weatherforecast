import React from "react";
import style from "./CurrentWeather.module.css";

const CurrentWeather = ({ weather }) => {
  return (
    <div className={style.weatherData}>
      <div className={style.mainInfo}>
        <h1 className={style.cityName}>
          {weather.city}, {weather.country}
        </h1>
        <p className={style.temp}>{weather.temp}℃</p>
        <p className={style.description}>{weather.description}</p>
        <p className={style.time}>Right Now</p>
      </div>

      <ul className={style.weatherDataList}>
        <li className={style.listItem}>
          <p>Visibility</p> <p>{weather.visibility} meters</p>
        </li>
        <li className={style.listItem}>
          <p>Feels Like</p> <p>{weather.feelsLike}℃</p>
        </li>
        <li className={style.listItem}>
          <p>Pressure</p> <p>{weather.pressure} hPa</p>
        </li>
        <li className={style.listItem}>
          <p>Humidity</p> <p>{weather.humidity} %</p>
        </li>
        <li className={style.listItem}>
          <p>Wind</p> <p>{weather.wind} meter/sec</p>
        </li>
        <li className={style.listItem}>
          <p>Sunrise</p>

          <p>
            {(weather.sunriseHours < 10 && `0${weather.sunriseHours}`) ||
              weather.sunriseHours}
            :
            {(weather.sunriseMinutes < 10 && `0${weather.sunriseMinutes}`) ||
              weather.sunriseMinutes}
          </p>
        </li>
        <li className={style.listItem}>
          <p>Sunset</p>
          <p>
            {(weather.sunsetHours < 10 && `0${weather.sunsetHours}`) ||
              weather.sunsetHours}
            :
            {(weather.sunsetMinutes < 10 && `0${weather.sunsetMinutes}`) ||
              weather.sunsetMinutes}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
