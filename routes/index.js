const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config;
const api_key = '85cd66a307c4ec9aa09de6292683cd24';
const ip = require('ip');
const address = ip.address();

// const fetchData = "http://api.ipstack.com/196.27.128.5?access_key=85cd66a307c4ec9aa09de6292683cd24";

const fetchData =`http://api.ipstack.com/${address}?access_key=${api_key}`


router.get('/', function (req, res, next) {


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
