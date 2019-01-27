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
const getCompanies = (order, orderBy, offset, rowsPerPage) => {
  //console.log(order)
  return instance.get('/companies', {params:{order, orderBy, offset, rowsPerPage}})
}
const getTotalCount = () => {
  return instance.get('/companies/totalcount')
}
export default {
  addCompany,
  getCompanies,
  getTotalCount
}
