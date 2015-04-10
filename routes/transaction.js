var express = require('express');
var router = express.Router();
var gateway = require('../lib/gateway');



router.get('/pay', function(req, res) {
	console.log('req.body',req.body);

	// gateway.transaction.sale({
	//   amount: '5.00',
	//   creditCard: {
	//     number: '4111111111111111',
	//     expirationMonth: '05',
	//     expirationYear: '12'
	//   }
	// }, function (err, result) {
	//   if (err) throw err;

	//   if (result.success) {
	//     console.log('Transaction ID: ' + result.transaction.id);
	//   } else {
	//     console.log(result.message);
	//   }
	// });
  	res.render('index', { title: 'Payment Confirmation' });
});

module.exports = router;
