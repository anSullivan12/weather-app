import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/current',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('')
  }
}
