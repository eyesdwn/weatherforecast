import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";
import style from "./ForecastPage.module.css";
// import moment from "moment";

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class ForecastPage extends Component {
  componentDidMount() {
    this.props.fetchByLocation();
    this.props.fetchFor5daysByLocation();
  }

  render() {
    const weather = this.props.weather.weather;
    const weatherFor5days = this.props.weather.weatherFor5days;

    if (weather.weather) {
      console.log(weatherFor5days);
    }

    return (
      <>
        {weather.weather && (
          <div className={style.weatherData}>
            <div className={style.mainInfo}>
              <h1 className={style.cityName}>
                {weather.city}, {weather.country}
              </h1>
              <p className={style.temp}>{weather.temp}℃</p>
              <p className={style.description}>{weather.description}</p>
              <p>
                Time{" "}
                {(weather.hours < 10 && `0${weather.hours}`) || weather.hours}:
                {(weather.minutes < 10 && `0${weather.minutes}`) ||
                  weather.minutes}
              </p>
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
                <p>{weather.sunrise}</p>
              </li>
              <li className={style.listItem}>
                <p>Sunset</p>
                <p>{weather.sunset}</p>
              </li>
            </ul>
            {weatherFor5days.list && (
              <ul>
                <li>
                  <p>Day, Date</p>
                  <p>Icon</p>
                  <p>Min</p>
                  <p>Max</p>
                </li>
              </ul>
            )}
            {weatherFor5days.list && (
              <>
                <h1>5 Days</h1>
                <div className={style.forecastTable}>
                  <div className={style.forecastListWrapper}>
                    <p>Day</p>
                    <ul className={style.forecastList}>
                      {weatherFor5days.list.map(item => (
                        <li className={style.forecastListItem}>
                          {/* {new Date(item.dt * 1000).getDate()}th of
                          {months[new Date(item.dt * 1000).getMonth()]} */}
                          {days[new Date(item.dt * 1000).getDay()]}
                        </li>
                      ))}
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
  // sortedWeatherDataByDate: selectors.getWeatherDataByTime(state)
});

const mapDispatchToProps = {
  fetchByLocation: operations.fetchByLocation,
  // fetchByLocation: weatherActions.fetchWeatherByLocation,
  // fetchFor5daysByLocation: weatherActions.fetchWeatherFor5daysByLocation
  fetchFor5daysByLocation: operations.fetchFor5daysByLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
