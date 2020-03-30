export const ActionType = {
  FETCH_BY_LOCATION_START: "FETCH_BY_LOCATION_START",
  FETCH_BY_LOCATION_SUCCESS: "FETCH_BY_LOCATION_SUCCESS",
  FETCH_BY_LOCATION_ERROR: "FETCH_BY_LOCATION_ERROR",
  FETCH_BY_CITY_START: "FETCH_BY_CITY_START",
  FETCH_BY_CITY_SUCCESS: "FETCH_BY_CITY_SUCCESS",
  FETCH_BY_CITY_ERROR: "FETCH_BY_CITY_ERROR",
  FETCH_FOR_7DAYS_START: "FETCH_FOR_7DAYS_START",
  FETCH_FOR_7DAYS_SUCCESS: "FETCH_FOR_7DAYS_SUCCESS",
  FETCH_FOR_7DAYS_ERROR: "FETCH_FOR_7DAYS_ERROR",
  FETCH_HOURLY_START: "FETCH_HOURLY_START",
  FETCH_HOURLY_SUCCESS: "FETCH_HOURLY_SUCCESS",
  FETCH_HOURLY_ERROR: "FETCH_HOURLY_ERROR"
};

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

export const fetchFor7daysStart = () => ({
  type: ActionType.FETCH_FOR_7DAYS_START
});

export const fetchFor7daysSuccess = data => ({
  type: ActionType.FETCH_FOR_7DAYS_SUCCESS,
  payload: {
    data
  }
});

export const fetchFor7daysError = error => ({
  type: ActionType.FETCH_FOR_7DAYS_ERROR,
  payload: {
    error
  }
});

export const fetchHourlyStart = () => ({
  type: ActionType.FETCH_HOURLY_START
});

export const fetchHourlySuccess = data => ({
  type: ActionType.FETCH_HOURLY_SUCCESS,
  payload: {
    data
  }
});

export const fetchHourlyError = error => ({
  type: ActionType.FETCH_HOURLY_ERROR,
  payload: {
    error
  }
});
