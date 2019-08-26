const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config;
const api_key = '85cd66a307c4ec9aa09de6292683cd24';

// Sample Ip Address can be...
// '197.210.64.81';




router.get('/:address', function (req, res, next) {
  const {address} = req.params;
  const fetchData =`http://api.ipstack.com/${address}?access_key=${api_key}`
  async function getUser() {
    try {
    } catch (error) {
      console.error(error);
    }
  }
  getUser();

});

module.exports = router;
