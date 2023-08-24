const crypto = require('crypto');

function asymmetricEncrypt(data, publicKey) {
    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data));
    return encrypted.toString('base64');
}

function asymmetricDecrypt(encryptedData, privateKey) {
    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64'));
    return decrypted.toString('utf8');
}


module.exports = {
    asymmetricEncrypt,
    asymmetricDecrypt
};

