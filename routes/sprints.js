var express = require('express');
var router = express.Router();
var dadosSprint = require("../scripts/data");

router.get('/:sprint', function(req, res, next) {
	const sprintNumber = req.params.sprint;
  	res.render('sprints', dadosSprint.dadosDaSprint(sprintNumber));

});

router.get('/:sprint/redmine.txt', function(req, res, next) {
	const sprintNumber = req.params.sprint;
  	res.render('redmine', dadosSprint.dadosDaSprint(sprintNumber));
});


module.exports = router;
