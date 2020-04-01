import axios from "axios";

import {
  fetchByLocationStart,
  fetchByLocationSuccess,
  fetchByLocationError,
  fetchByCityStart,
  fetchByCitySuccess,
  fetchByCityError,
  fetchFor7daysStart,
  fetchFor7daysSuccess,
  fetchFor7daysError,
  fetchHourlyStart,
  fetchHourlySuccess,
  fetchHourlyError
} from "./actions";

const APP_KEY = "9adc8c21da16df48ff74ef05a9727c0f";

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&appid=${APP_KEY}`;

export const fetchByLocation = () => dispatch => {
  dispatch(fetchByLocationStart());

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&appid=${APP_KEY}&units=metric`
    )
    .then(response => {
      dispatch(fetchByLocationSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchByLocationError(error));
    });
};

export const fetchByCity = city => dispatch => {
  dispatch(fetchByCityStart());

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`
    )
    .then(response => {
      dispatch(fetchByCitySuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchByCityError(error));
    });
};

export const fetchFor7days = () => dispatch => {
  dispatch(fetchFor7daysStart());

  axios
    .get(`url{days}`)
    .then(response => {
      dispatch(fetchFor7daysSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchFor7daysError(error));
    });
};

export const fetchHourly = () => dispatch => {
  dispatch(fetchHourlyStart());

  axios
    .get(`url{hourly}`)
    .then(response => {
      dispatch(fetchHourlySuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchHourlyError(error));
    });
};
