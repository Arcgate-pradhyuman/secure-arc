// swaggerConfig.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],

};

const specs = swaggerJsdoc(options);

module.exports = specs;
