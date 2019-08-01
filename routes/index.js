const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config;
const api_key = process.env.API_KEY;
const ip = require('ip');
const address = ip.address();




router.get('/', function (req, res, next) {
  // const fetchData =`http://api.ipstack.com/${address}?access_key=${api_key}`

  const fetchData = "http://api.ipstack.com/196.27.128.5?access_key=85cd66a307c4ec9aa09de6292683cd24";

  async function getUser() {
    try {
      const response = await axios.get(fetchData);
      console.log(response.data)
      const { continent, country, region_name, latitude, longitude, ip } = response.data;
      res.json({
        ip: ip,
        continent: continent,
        country: country,
        state: region_name,
        latitude: latitude,
        longitude: longitude
      }).status(200)

    } catch (error) {
      console.error(error);
    }
  }
  getUser();
});

module.exports = router;
