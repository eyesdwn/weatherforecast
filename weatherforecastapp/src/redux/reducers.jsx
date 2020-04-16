import { combineReducers } from "redux";
import { ActionType } from "./actions";

const weatherReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_BY_LOCATION_SUCCESS:
      return payload.data;

    case ActionType.FETCH_BY_CITY_SUCCESS:
      return payload.data;

    default:
      return state;
  }
};

const weatherFor5DaysReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_FOR_5DAYS_SUCCESS:
      return payload.data;

    case ActionType.FETCH_FOR_5_DAYS_BY_CITY_SUCCESS:
      return payload.data;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_BY_CITY_START:
    case ActionType.FETCH_BY_LOCATION_START:
    case ActionType.FETCH_FOR_5DAYS_START:
    case ActionType.FETCH_FOR_5_DAYS_BY_CITY_START:
    case ActionType.FETCH_BY_LOCATION_ERROR:
    case ActionType.FETCH_FOR_5DAYS_ERROR:
    case ActionType.FETCH_FOR_5_DAYS_BY_CITY_ERROR:
    case ActionType.FETCH_BY_CITY_ERROR:
      return true;

    case ActionType.FETCH_BY_CITY_SUCCESS:
    case ActionType.FETCH_BY_LOCATION_SUCCESS:
    case ActionType.FETCH_FOR_5DAYS_SUCCESS:
    case ActionType.FETCH_FOR_5_DAYS_BY_CITY_SUCCESS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_BY_CITY_START:
    case ActionType.FETCH_BY_LOCATION_START:
    case ActionType.FETCH_FOR_5DAYS_START:
    case ActionType.FETCH_FOR_5_DAYS_BY_CITY_START:
      return null;

    case ActionType.FETCH_BY_CITY_ERROR:
    case ActionType.FETCH_BY_LOCATION_ERROR:
    case ActionType.FETCH_FOR_5DAYS_ERROR:
    case ActionType.FETCH_FOR_5_DAYS_BY_CITY_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  weather: weatherReducer,
  weatherFor5days: weatherFor5DaysReducer,
  loading: loadingReducer,
  error: errorReducer
});
