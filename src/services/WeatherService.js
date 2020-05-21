import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/current?postal_code=44720&country=US&key=25201b6605424961868883102857e8b9',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getData() {
    return apiClient.get('/data');
  },
};
