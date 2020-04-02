import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";
import style from "./ForecastPage.module.css";

class ForecastPage extends Component {
  componentDidMount() {
    this.props.fetchByLocation();
    this.props.fetchFor5daysByLocation();
  }

  render() {
    const weather = this.props.weather.weather;
    const weatherFor5days = this.props.weather.weatherFor5days;
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
              <p>
                Time {new Date(weather.dt * 1000).getHours()}:
                {new Date(weather.dt * 1000).getMinutes()}
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
            {weatherFor5days.list && (
              <>
                <h1>5 Days</h1>
                <div className={style.forecastTable}>
                  <div className={style.forecastListWrapper}>
                    <p>Time</p>
                    <ul className={style.forecastList}>
                      {/* {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {item.weather[0].dt}
                        </li>
                      ))} */}
                    </ul>
                  </div>
                  <div className={style.forecastListWrapper}>
                    <p>Description</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {item.weather[0].description}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.forecastListWrapper}>
                    <p>Temp</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {Math.floor(item.main.temp)}℃
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.forecastListWrapper}>
                    <p>Feels Like</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {Math.floor(item.main.feels_like)}℃
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.forecastListWrapper}>
                    <p>Humidity</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {item.main.humidity}%
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.forecastListWrapper}>
                    <p>Wind</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {item.wind.speed.toFixed(1)} meter/sec
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={style.forecastListWrapper}>
                    <p>Pressure</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {item.main.pressure}hPa
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  weather: selectors.getWeather(state),
  weatherFor5days: selectors.getWeatherFor5days(state)
});

const mapDispatchToProps = {
  fetchByLocation: operations.fetchByLocation,
  fetchFor5daysByLocation: operations.fetchFor5daysByLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
