var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('vc é legal');
});

router.get('/cool/beach', function(req, res, next) {
  res.send('adoro praia');
});

router.get('/ifc', function(req, res, next) {
  res.send('bem vindo ao ifc ');
});
module.exports = router;
