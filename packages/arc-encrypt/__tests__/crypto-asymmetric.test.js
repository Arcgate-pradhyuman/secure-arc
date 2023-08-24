const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});

const data = "SuperSecretMessage";
const encryptedAsymmetricData = encrypt(data, publicKey);
console.log(`Asymmetric Encrypted Data: ${encryptedAsymmetricData}`);
console.log(`Asymmetric Decrypted Data: ${decrypt(encryptedAsymmetricData, privateKey)}`);
console.log(`private key Data:`, privateKey);
console.log(`public key Data: `, publicKey);



