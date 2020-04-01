import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";

class ForecastPage extends Component {
  componentDidMount() {
    this.props.fetchByLocation();
  }

  render() {
    const weather = this.props.weather.weather;
    console.log(weather);
    return (
      <>
        {weather && (
          <>
            <h1>{weather.name}</h1>
            <p>Visibility: {weather.visibility}</p>
            {/* <p>Temp {weather.weather[0].main}</p> */}
          </>
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
