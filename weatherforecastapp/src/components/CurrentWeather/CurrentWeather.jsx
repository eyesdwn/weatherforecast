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
          <p className={style.margin}>Visibility</p>{" "}
          <p className={style.margin}>{weather.visibility} meters</p>
        </li>
        <li className={style.listItem}>
          <p className={style.margin}>Feels Like</p>{" "}
          <p className={style.margin}>{weather.feelsLike}℃</p>
        </li>
        <li className={style.listItem}>
          <p className={style.margin}>Pressure</p>{" "}
          <p className={style.margin}>{weather.pressure} hPa</p>
        </li>
        <li className={style.listItem}>
          <p className={style.margin}>Humidity</p>{" "}
          <p className={style.margin}>{weather.humidity} %</p>
        </li>
        <li className={style.listItem}>
          <p className={style.margin}>Wind</p>{" "}
          <p className={style.margin}>{weather.wind} meter/sec</p>
        </li>
        <li className={style.listItem}>
          <p className={style.margin}>Sunrise</p>

          <p className={style.margin}>
            {(weather.sunriseHours < 10 && `0${weather.sunriseHours}`) ||
              weather.sunriseHours}
            :
            {(weather.sunriseMinutes < 10 && `0${weather.sunriseMinutes}`) ||
              weather.sunriseMinutes}
          </p>
        </li>
        <li className={style.listItem}>
          <p className={style.margin}>Sunset</p>
          <p className={style.margin}>
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
