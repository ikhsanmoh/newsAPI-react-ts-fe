
const axios = require('axios')
const API_KEY = '59e209d2ed8d4a62ba63d0992f70c603'

const API = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    q: "*",
    language: "en"
  }
})

API.defaults.headers.common['Authorization'] = API_KEY;

export default API