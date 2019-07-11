var express = require('express');
var router = express.Router();
var dadosSprint = require("../scripts/data");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Reunião de final das sprints',
		sprints: dadosSprint.getSprints().reverse()
	});
});

module.exports = router;