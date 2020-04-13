export const ActionType = {
  FETCH_BY_LOCATION_START: "FETCH_BY_LOCATION_START",
  FETCH_BY_LOCATION_SUCCESS: "FETCH_BY_LOCATION_SUCCESS",
  FETCH_BY_LOCATION_ERROR: "FETCH_BY_LOCATION_ERROR",
  FETCH_BY_CITY_START: "FETCH_BY_CITY_START",
  FETCH_BY_CITY_SUCCESS: "FETCH_BY_CITY_SUCCESS",
  FETCH_BY_CITY_ERROR: "FETCH_BY_CITY_ERROR",
  FETCH_FOR_5DAYS_START: "FETCH_FOR_5DAYS_START",
  FETCH_FOR_5DAYS_SUCCESS: "FETCH_FOR_5DAYS_SUCCESS",
  FETCH_FOR_5DAYS_ERROR: "FETCH_FOR_5DAYS_ERROR",
  FETCH_FOR_5_DAYS_BY_CITY_START: "FETCH_FOR_5_DAYS_BY_CITY_START",
  FETCH_FOR_5_DAYS_BY_CITY_SUCCESS: "FETCH_FOR_5_DAYS_BY_CITY_SUCCESS",
  FETCH_FOR_5_DAYS_BY_CITY_ERROR: "FETCH_FOR_5_DAYS_BY_CITY_ERROR",
  GET_MORE_INFO: "GET_MORE_INFO"
};

export const getMoreData = data => ({
  type: ActionType.GET_MORE_INFO,
  payload: {
    data
  }
});

export const fetchByLocationStart = () => ({
  type: ActionType.FETCH_BY_LOCATION_START
});

export const fetchByLocationSuccess = data => ({
  type: ActionType.FETCH_BY_LOCATION_SUCCESS,
  payload: {
    data
  }
});

export const fetchByLocationError = error => ({
  type: ActionType.FETCH_BY_LOCATION_ERROR,
  payload: {
    error
  }
});

export const fetchByCityStart = () => ({
  type: ActionType.FETCH_BY_CITY_START
});

export const fetchByCitySuccess = data => ({
  type: ActionType.FETCH_BY_CITY_SUCCESS,
  payload: {
    data
  }
});

export const fetchByCityError = error => ({
  type: ActionType.FETCH_BY_CITY_ERROR,
  payload: {
    error
  }
});

export const fetchFor5daysStart = () => ({
  type: ActionType.FETCH_FOR_5DAYS_START
});

export const fetchFor5daysSuccess = data => ({
  type: ActionType.FETCH_FOR_5DAYS_SUCCESS,
  payload: {
    data
  }
});

export const fetchFor5daysError = error => ({
  type: ActionType.FETCH_FOR_5DAYS_ERROR,
  payload: {
    error
  }
});

export const fetchFor5daysByCityStart = () => ({
  type: ActionType.FETCH_FOR_5_DAYS_BY_CITY_START
});

export const fetchFor5daysByCitySuccess = data => ({
  type: ActionType.FETCH_FOR_5_DAYS_BY_CITY_SUCCESS,
  payload: {
    data
  }
});

export const fetchFor5daysByCityError = error => ({
  type: ActionType.FETCH_FOR_5_DAYS_BY_CITY_ERROR,
  payload: {
    error
  }
});
