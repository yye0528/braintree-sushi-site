var express = require('express');
var router = express.Router();
var gateway = require('../lib/gateway');

/* GET home page. */

router.get('/', function(req, res) {
	gateway.clientToken.generate({}, function (err, data) {
		var clientToken = data.clientToken;
		res.render('sushi', { token: clientToken });
	});
});

module.exports = router;
