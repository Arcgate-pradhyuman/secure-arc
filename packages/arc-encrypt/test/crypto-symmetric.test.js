
const data = "SuperSecretMessage";

const secretKey = crypto.randomBytes(32); // For AES-256
const iv = crypto.randomBytes(16); // Initialization vector

const encryptedData = symmetricEncrypt(data, secretKey, iv);
console.log(`Encrypted Data: ${encryptedData}`);
console.log(`Decrypted Data: ${symmetricDecrypt(encryptedData, secretKey, iv)}`);



