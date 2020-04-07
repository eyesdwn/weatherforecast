import * as API from "../services/weatherAPI";
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

export const fetchByLocation = () => async dispatch => {
  try {
    dispatch(fetchByLocationStart());

    const weatherData = await API.getWeatherByLocation();

    dispatch(fetchByLocationSuccess(weatherData));
  } catch (error) {
    dispatch(fetchByLocationError(error));
  }
};

export const fetchByCity = city => async dispatch => {
  try {
    dispatch(fetchByCityStart());

    const weatherData = await API.getWeatherByCity(city);

    dispatch(fetchByCitySuccess(weatherData));
  } catch (error) {
    dispatch(fetchByCityError(error));
  }
};

export const fetchFor5daysByLocation = () => async dispatch => {
  try {
    dispatch(fetchFor5daysStart());

    const sortedWeatherDataByDate = await API.getWeatherFor5days();

    dispatch(fetchFor5daysSuccess(sortedWeatherDataByDate));
  } catch (error) {
    dispatch(fetchFor5daysError(error));
  }
};

export const fetchFor5daysByCity = city => async dispatch => {
  try {
    dispatch(fetchFor5daysByCityStart());

    const sortedWeatherDataByDate = await API.getWeatherFor5daysByCity(city);

    dispatch(fetchFor5daysByCitySuccess(sortedWeatherDataByDate));
  } catch (error) {
    dispatch(fetchFor5daysByCityError(error));
  }
};
