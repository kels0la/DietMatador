require('dotenv').config()
import express, { static } from 'express';
import { urlencoded, json } from 'body-parser';
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