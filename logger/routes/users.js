var express = require('express');
var router = express.Router();
var debug = require("debug")("logger:api:users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug("in users")
  res.send('respond with a resource');
});

module.exports = router;
