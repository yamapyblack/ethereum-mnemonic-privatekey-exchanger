const pkutils = require('./index');

pkutils.debug = false;

const privatekey = '000...';
const password = 'Password123';

console.log('privatekey             : %s', privatekey);
console.log('password               : %s', password);

const keystore = pkutils.getKeystoreFromPrivateKey(privatekey, password);
console.log('\nkey store              : %j\n', keystore);

