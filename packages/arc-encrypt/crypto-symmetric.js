const crypto = require('crypto');

const data = "SuperSecretMessage";

function symmetricEncrypt(data, key, iv) {
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function symmetricDecrypt(encryptedData, key, iv) {
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const secretKey = crypto.randomBytes(32); // For AES-256
const iv = crypto.randomBytes(16); // Initialization vector

const encryptedData = symmetricEncrypt(data, secretKey, iv);
console.log(`Encrypted Data: ${encryptedData}`);
console.log(`Decrypted Data: ${symmetricDecrypt(encryptedData, secretKey, iv)}`);
