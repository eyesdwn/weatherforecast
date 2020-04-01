import { fetchByLocation } from "../redux/operations";

export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getCurrentPosition()
  .then(location => {
    success(location);
  })
  .catch(error => console.log(error));

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const latitudeToFixed = latitude.toFixed(2);
  const longitudeToFixed = longitude.toFixed(2);

  fetchByLocation(latitudeToFixed, longitudeToFixed).then(data => {
    let cityName = data.name;

    // fetchAndRenderCityByQuery(cityName);
  });
}
