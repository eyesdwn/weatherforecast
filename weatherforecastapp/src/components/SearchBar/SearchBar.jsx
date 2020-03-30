import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";

class SearchBar extends Component {
  state = {
    city: ""
  };

  handleChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { city } = this.state;
    const { fetchByCity } = this.props;

    fetchByCity(city);

    // this.props.history.push({
    //   pathname: this.props.location.pathname,
    //   search: `query=${city}`
    // });
  };

  render() {
    const { city } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />

          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: selectors.getWeather(state)
});

const mapDispatchToProps = {
  fetchByCity: operations.fetchByCity
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
