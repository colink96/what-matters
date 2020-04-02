const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const morgan = require('morgan');
module.exports = app;

const PORT = 8080;

const createApp = () => {
  // Logging middleware
  app.use(morgan('dev'));

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Error handling
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
  );
};

const boot = async () => {
  await createApp();
  await startListening();
};

if (require.main === module) {
  boot();
} else {
  createApp();
}
