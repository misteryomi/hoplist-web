// client.js
var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'https://hoplist.herokuapp.com' //'http://localhost:3001',
  /* other custom settings */
});

module.exports = axiosInstance;