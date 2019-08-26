const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config;
const api_key = '85cd66a307c4ec9aa09de6292683cd24';

// Sample Ip Address can be...
// const address = '197.210.64.81';




router.get('/:address', function (req, res, next) {
  const {address} = req.params;
  const fetchData =`http://api.ipstack.com/${address}?access_key=${api_key}`
  async function getUser() {
    try {

      const response = await axios.get(fetchData);
      const { continent_name, country_name, region_name, latitude, longitude, ip } = response.data;
      res.json({
        ip: ip,
        continent: continent_name,
        country: country_name,
        state: region_name,
        latitude: latitude,
        longitude: longitude,
      }).status(200)

    } catch (error) {
      console.error(error);
    }
  }
  getUser();

});

module.exports = router;
