var express = require('express');
var router = express.Router();
const appLogger = require('../logger-setup')
var debug = require("debug")("logger:api:index")

/* GET home page. */
router.get('/', function (req, res, next) {
  debug("in index")
  try {
    appLogger.log("info", "index reached!")

    throw Error("Test error!");
  } catch (err) {
    appLogger.log("error", "error in index:", err)
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
