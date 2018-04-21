import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://13.59.53.130:8080/AppointmentSystem/rest/`,
  headers: {
    Authorization: 'Bearer {token}',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})
