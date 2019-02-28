require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;

// Graps required config from .env
admin.initializeApp()

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dietMatador', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true)

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(static('client/build'));
}

// Add routes
// require('./routes/api/paramHelpers')(app)
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});