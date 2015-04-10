var braintree = require('braintree');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: '8ybzzhb3vh77js52',
  publicKey: 't94rwx9wvy88p5yy',
  privateKey: '182519e219acffec8ddf220cd2ecb66e'
});

module.exports = gateway;