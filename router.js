var Router =  require('express').Router();
var start = require('./start');

Router.get('/',start.start);

module.exports = Router;
