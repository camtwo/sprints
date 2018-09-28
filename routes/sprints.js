var express = require('express');
var router = express.Router();
var dadosSprint = require("../scripts/data");

router.get('/', function(req, res, next) {
  res.render('sprints', dadosSprint.sprint_81);
});

router.get('/redmine.txt', function(req, res, next) {
  res.render('redmine', dadosSprint.sprint_81);
});


module.exports = router;
