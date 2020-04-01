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
