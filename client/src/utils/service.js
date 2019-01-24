const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000,
  headers: { 'content-type': 'application/json' },
});
const addCompany = (values) => {
  //console.log(values)
  return instance.post('/companies', values)
}
export default {
  addCompany
}
