const crypto = require('crypto');
const { encrypt, decrypt } = require("../crypto-symmetric")

const data = "SuperSecretMessage";

SYMMETRIC_ENC_SECRET_KEY = "dcb0c60a794087a4ee32c86d21f9bbb82d88877691ae555d96c3723955dbfc21"
const secretKey = Buffer.from(SYMMETRIC_ENC_SECRET_KEY, 'hex');
console.log(secretKey);


// const secretKey = crypto.randomBytes(32); // For AES-256
const iv = crypto.randomBytes(16); // Initialization vector
console.log(secretKey)
const encryptedData = encrypt(data, secretKey, iv);
console.log(`Encrypted Data: ${encryptedData}`);
console.log(`Decrypted Data: ${decrypt(encryptedData, secretKey, iv)}`);



