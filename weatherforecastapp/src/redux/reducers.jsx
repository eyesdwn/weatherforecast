import { combineReducers } from "redux";
import { ActionType } from "./actions";

const weatherReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_BY_LOCATION_SUCCESS:
      return payload.data;

    case ActionType.FETCH_BY_CITY_SUCCESS:
      return payload.data;

    case ActionType.FETCH_FOR_7DAYS_SUCCESS:
      return payload.data;

    case ActionType.FETCH_HOURLY_SUCCESS:
      return [...state, payload.data];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_BY_CITY_START:
    case ActionType.FETCH_BY_LOCATION_START:
    case ActionType.FETCH_FOR_7DAYS_START:
    case ActionType.FETCH_HOURLY_START:
      return true;

    case ActionType.FETCH_BY_CITY_SUCCESS:
    case ActionType.FETCH_BY_CITY_ERROR:
    case ActionType.FETCH_BY_LOCATION_SUCCESS:
    case ActionType.FETCH_BY_LOCATION_ERROR:
    case ActionType.FETCH_FOR_7DAYS_SUCCESS:
    case ActionType.FETCH_FOR_7DAYS_ERROR:
    case ActionType.FETCH_HOURLY_SUCCESS:
    case ActionType.FETCH_HOURLY_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_BY_CITY_START:
    case ActionType.FETCH_BY_LOCATION_START:
    case ActionType.FETCH_FOR_7DAYS_START:
    case ActionType.FETCH_HOURLY_START:
      return null;

    case ActionType.FETCH_BY_CITY_ERROR:
    case ActionType.FETCH_BY_LOCATION_ERROR:
    case ActionType.FETCH_FOR_7DAYS_ERROR:
    case ActionType.FETCH_HOURLY_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  weather: weatherReducer,
  loading: loadingReducer,
  error: errorReducer
});
