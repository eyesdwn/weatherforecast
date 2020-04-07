// import { createSelector } from "reselect";
// import _ from "lodash";

export const getWeather = state => state.weather;

export const getWeatherFor5days = state => state.weatherFor5days;

export const getWeatherDataFor5days = state => state.sortedWeatherDataByDate;

// export function getWeatherDataByTime(state) {
//   if (state.weatherFor5days) {
//     return _.mapValues(
//       _.keyBy(state.weatherFor5days.list),
//       dt => state.weatherFor5days.weatherByTime[dt]
//     );
//   }
// }
