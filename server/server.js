require('dotenv').config();
const express = require('express')
  , session = require('express-session')
  , massive = require('massive')
  , axios = require('axios')

const app = express();

const {
  SERVER_PORT,
  SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,

} = process.env;




app.listen(SERVER_PORT, () => {
  console.log(`Still alive on port: ${SERVER_PORT}`);
})


