require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const admin = require('firebase-admin');
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static('public'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(static('client/build'));
}

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});