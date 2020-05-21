import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/current',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    key: '25201b6605424961868883102857e8b9'
  }
})

export default {
  getEvents() {
    return apiClient.get('')
  }
}
