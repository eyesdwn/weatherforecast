import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";

class ForecastPage extends Component {
  componentDidMount() {
    this.props.fetchByLocation();
  }

  render() {
    return <h1>TODAY FORECAST PAGE</h1>;
  }
}

const mapDispatchToProps = {
  fetchByLocation: operations.fetchByLocation
};

export default connect(null, mapDispatchToProps)(ForecastPage);
