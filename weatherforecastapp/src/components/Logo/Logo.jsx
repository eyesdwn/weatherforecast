import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import style from "./Logo.module.css";
import { connect } from "react-redux";
import * as operations from "../../redux/operations";

const StyledLogoLink = styled(NavLink)`
  font-family: sans-serif;
  font-size: 24px;
  padding-left: 20px;

  color: rgb(58, 57, 57);
  text-decoration: none;
  margin: 0;
`;

const Logo = ({ fetchByLocation, fetchFor5daysByLocation }) => {
  const fetchData = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude.toFixed(2);
      const lng = position.coords.longitude.toFixed(2);
      fetchByLocation(lat, lng);
      fetchFor5daysByLocation(lat, lng);
    });
  };

  return (
    <div className={style.logoContainer} onClick={fetchData}>
      <StyledLogoLink exact to="/">
        WeatherForecast
      </StyledLogoLink>
    </div>
  );
};

const mapDispatchToProps = {
  fetchByLocation: operations.fetchByLocation,
  fetchFor5daysByLocation: operations.fetchFor5daysByLocation
};

export default connect(null, mapDispatchToProps)(Logo);
