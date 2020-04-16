import React from "react";
import style from "./HourlyData.module.css";
import pressureImg from "./pressure.png";
import humidityImg from "./humidity.png";
import windImg from "./wind.png";

const HourlyData = ({ hourlyData }) => {
  return (
    <div className={style.moreInfo}>
      {hourlyData.map(el => (
        <div key={el.dt} className={style.day}>
          <p className={style.timeInfo}>{`${
            el.dt_txt.split(" ")[1].split(":")[0]
          }:00`}</p>
          <img
            className={style.img}
            src={`https://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
            alt="weather"
          />
          <p className={style.tempInfo}>{Math.round(el.main.temp)}&#176;</p>

          <p className={style.iconWrapper}>
            <img className={style.iconImg} src={pressureImg} alt="pressure" />
            <p className={style.dataDetail}>
              {Math.round(el.main.pressure / 1.3)} mm
            </p>
          </p>

          <p className={style.iconWrapper}>
            <img className={style.iconImg} src={humidityImg} alt="humidity" />
            <p className={style.dataDetail}>{el.main.humidity} %</p>
          </p>

          <p className={style.iconWrapper}>
            <img className={style.iconImg} src={windImg} alt="wind" />
            <p className={style.dataDetail}>{el.wind.speed} m/s</p>
          </p>
        </div>
      ))}
    </div>
  );
};

export default HourlyData;
