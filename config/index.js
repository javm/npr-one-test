require('dotenv').config();
const nconf = require('nconf'),
      path = require('path');

//loading command line arguments and enviroment variables
nconf.argv().env();

module.exports = nconf;
