import React from "react";
// import { connect } from "react-redux";
// import * as operations from "../../redux/operations";
// import * as selectors from "../../redux/selectors";

// class FutureForecastPage extends Component {
//   componentDidMount() {
//     this.props.fetchFor7daysByLocation();
//   }

//   render() {
//     const weather = this.props.weather.weather;
//     if (weather.list) {
//       console.log(weather);
//     }

//     return <h1>5 Days Forecast</h1>;
//   }
// }

// const mapStateToProps = state => ({
//   weather: selectors.getWeather(state)
// });

// const mapDispatchToProps = {
//   fetchFor7daysByLocation: operations.fetchFor7daysByLocation
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FutureForecastPage);

const FutureForecastPage = () => <h1>HOURLY PAGE</h1>;

export default FutureForecastPage;
