import React from "react";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <a href="#" className={style.logoLink}>
        WeatherForecast
      </a>
    </div>
  );
};

export default Logo;
