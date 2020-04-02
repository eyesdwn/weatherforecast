import React, { Component } from "react";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";
import * as selectors from "../../redux/selectors";
import styles from "./SearchBar.module.css";

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
    const { fetchByCity, fetchFor5daysByCity } = this.props;

    fetchByCity(city);
    fetchFor5daysByCity(city);

    this.setState({
      city: ""
    });

    // this.props.history.push({
    //   pathname: this.props.location.pathname,
    //   search: `query=${city}`
    // });
  };

  render() {
    const { city } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Town/City"
          value={city}
          className={styles.searchInput}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
        />

        <button type="submit" className={styles.submitButton}></button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  weather: selectors.getWeather(state),
  weatherFor5days: selectors.getWeatherFor5days(state)
});

const mapDispatchToProps = {
  fetchByCity: operations.fetchByCity,
  fetchFor5daysByCity: operations.fetchFor5daysByCity
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
