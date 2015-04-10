var express = require('express');
var router = express.Router();
var gateway = require('../lib/gateway');



router.post('/', function(req, res) {
	console.log('req.body',req.body);

	gateway.transaction.sale({
	  amount: req.body.totalPrice.substring(1),
	  paymentMethodNonce: req.body.payment_method_nonce,
	}, function (err, result) {
		if (err) throw err;

		if (result.success) {
		  console.log('Transaction ID: ' + result.transaction.id);
		  console.log('Transaction: ' + result.transaction);

		  res.render('confirmation', { transactionId: result.transaction.id });
		} else {
		  console.log(result.message);
		}
	});

  	
});

module.exports = router;
