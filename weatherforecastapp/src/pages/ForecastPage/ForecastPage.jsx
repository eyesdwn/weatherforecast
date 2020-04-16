import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import FiveDays from "../../components/FiveDays/FiveDays";
// import Nav from "../../components/Nav/Nav";
import Loader from "../../components/Loader/Loader";

class ForecastPage extends Component {
  componentDidMount() {
    this.getData();
  }

  getData() {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toFixed(2);
      const lng = position.coords.longitude.toFixed(2);
      this.props.fetchByLocation(lat, lng);
      this.props.fetchFor5daysByLocation(lat, lng);
    });
  }

  render() {
    const weather = this.props.weather.weather;
    const weatherFor5days = this.props.weather.weatherFor5days;
    const isLoading = this.props.weather.loading;

    return (
      <>
        {/* <Nav /> */}
        {isLoading && <Loader />}
        {weather.weather && <CurrentWeather weather={weather} />}
        <div>
          {weatherFor5days && <FiveDays weatherFor5days={weatherFor5days} />}
        </div>
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
