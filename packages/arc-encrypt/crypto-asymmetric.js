const crypto = require('crypto');

const data = "SuperSecretMessage";

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});

function asymmetricEncrypt(data, publicKey) {
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data));
    return encrypted.toString('base64');
}

function asymmetricDecrypt(encryptedData, privateKey) {
    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64'));
    return decrypted.toString('utf8');
}

const encryptedAsymmetricData = asymmetricEncrypt(data, publicKey);
console.log(`Asymmetric Encrypted Data: ${encryptedAsymmetricData}`);
console.log(`Asymmetric Decrypted Data: ${asymmetricDecrypt(encryptedAsymmetricData, privateKey)}`);
console.log(`private key Data:`, privateKey);
console.log(`public key Data: `, publicKey);

