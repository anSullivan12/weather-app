import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/current?units=I&country=US&key=25201b6605424961868883102857e8b9&postal_code=',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getDetails(zip) {
    return apiClient.get('' + zip);
  },
  getForecastedDetails(zip, hours) {
    return apiClient.get('' + zip + hours);
  },
};
