const axios = require('axios')
const qs = require('qs')

const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'comma' })
  },
})

instance.interceptors.request.use(
  (config) => config,
  (err) => err
)

instance.interceptors.response.use(
  (response) => {
    const { status } = response
    if (status >= 200 && status < 400) {
      return response.data
    }
    return Promise.reject(response)
  },
  (err) => {
    return Promise.reject(err)
  }
)

function request(req) {
  return instance.request(req)
}

module.exports = request
