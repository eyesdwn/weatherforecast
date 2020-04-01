import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";
import style from "./ForecastPage.module.css";

class ForecastPage extends Component {
  componentDidMount() {
    this.props.fetchByLocation();
  }
  componentDidUpdate() {
    console.log("updated!");
  }

  render() {
    const weather = this.props.weather.weather;
    if (weather.weather) {
      console.log(weather);
    }

    return (
      <>
        {weather.weather && (
          <div className={style.weatherData}>
            <div className={style.mainInfo}>
              <h1 className={style.cityName}>
                {weather.name}, {weather.sys.country}
              </h1>
              <p className={style.temp}>{Math.floor(weather.main.temp)}℃</p>
              <p className={style.description}>
                {weather.weather[0].description
                  .split(/\s+/)
                  .map(word => word[0].toUpperCase() + word.substring(1))
                  .join(" ")}
              </p>
            </div>

            <ul className={style.weatherDataList}>
              <li className={style.listItem}>
                <p>Visibility</p> <p>{weather.visibility} meters</p>
              </li>
              <li className={style.listItem}>
                <p>Feels Like</p> <p>{Math.floor(weather.main.feels_like)}℃</p>
              </li>
              <li className={style.listItem}>
                <p>Pressure</p> <p>{weather.main.pressure} hPa</p>
              </li>
              <li className={style.listItem}>
                <p>Humidity</p> <p>{weather.main.humidity} %</p>
              </li>
              <li className={style.listItem}>
                <p>Wind</p> <p>{weather.wind.speed} meter/sec</p>
              </li>
              <li className={style.listItem}>
                <p>Sunrise</p>
                <p>
                  {new Date(weather.sys.sunrise * 1000).getHours()}:
                  {new Date(weather.sys.sunrise * 1000).getMinutes()}
                </p>
              </li>
              <li className={style.listItem}>
                <p>Sunset</p>
                <p>
                  {new Date(weather.sys.sunset * 1000).getHours()}:
                  {new Date(weather.sys.sunset * 1000).getMinutes()}
                </p>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  weather: selectors.getWeather(state)
});

const mapDispatchToProps = {
  fetchByLocation: operations.fetchByLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
