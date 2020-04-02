import axios from "axios";

import {
  fetchByLocationStart,
  fetchByLocationSuccess,
  fetchByLocationError,
  fetchByCityStart,
  fetchByCitySuccess,
  fetchByCityError,
  fetchFor5daysStart,
  fetchFor5daysSuccess,
  fetchFor5daysError,
  fetchFor5daysByCityStart,
  fetchFor5daysByCitySuccess,
  fetchFor5daysByCityError
} from "./actions";

const APP_KEY = "9adc8c21da16df48ff74ef05a9727c0f";

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&appid=${APP_KEY}`;

export const fetchByLocation = () => dispatch => {
  dispatch(fetchByLocationStart());

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=50.43&lon=30.52&appid=${APP_KEY}&units=metric`
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

export const fetchFor5daysByLocation = () => dispatch => {
  dispatch(fetchFor5daysStart());

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=50.43&lon=30.52&appid=${APP_KEY}&units=metric`
    )
    .then(response => {
      dispatch(fetchFor5daysSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchFor5daysError(error));
    });
};

export const fetchFor5daysByCity = city => dispatch => {
  dispatch(fetchFor5daysByCityStart());

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP_KEY}&units=metric`
    )
    .then(response => {
      dispatch(fetchFor5daysByCitySuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchFor5daysByCityError(error));
    });
};

// export const fetchFor5daysByCity = () => dispatch => {
//   dispatch(fetchFor5daysByCityStart());

//   axios
//     .get(
//       `https://api.openweathermap.org/data/2.5/forecast/hourly?q=London&appid=${APP_KEY}&units=metric`
//     )
//     .then(response => {
//       dispatch(fetchFor5daysByCitySuccess(response.data));
//     })
//     .catch(error => {
//       dispatch(fetchFor5daysByCityError(error));
//     });
// };
