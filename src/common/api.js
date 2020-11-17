import axios from 'axios'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.REACT_APP_APPID,
    units: 'metric'
  },
})

export const getCurrentWeatherByCity = (city, callback) => {
  return axiosInstance.get('/weather', {
    params: {
      q: city,
    }
  })
    .then(({ data }) => {
      const { id, name, main: { temp }, weather: [weather] } = data
      callback({ id, name, temp, weather })
    })
    .catch(err => {
      if (err.response) {
        toast.error(err.response.data.message[0].toUpperCase() + err.response.data.message.slice(1,) + '!')
      }
    })
}

export const getWeatherForecastByCity = (city, callback) => {
  return axiosInstance.get('/forecast/daily', {
    params: {
      q: city,
      cnt: 5
    }
  })
    .then(({ data: { list } }) => {
      callback(list)
    })
    .catch(err => {
      if (err.response) {
        toast.error(err.response.data.message[0].toUpperCase() + err.response.data.message.slice(1,) + '!')
      }
    })
}
