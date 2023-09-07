const crypto = require('crypto');

/**
 * Encrypts a given data string using AES-256-CBC algorithm.
 *
 * @param {string} data - The data string to be encrypted.
 * @param {Buffer} key - The encryption key. Must be 256 bits (32 bytes).
 * @param {Buffer} iv - The initialization vector (IV). Must be 128 bits (16 bytes) for AES-256-CBC.
 * @returns {string} The encrypted data in hex format.
 */
function encrypt(data, key, iv) {
  let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

/**
 * Decrypts a given encrypted data string that was encrypted using AES-256-CBC algorithm.
 *
 * @param {string} encryptedData - The data string to be decrypted, in hex format.
 * @param {Buffer} key - The decryption key. Must be 256 bits (32 bytes).
 * @param {Buffer} iv - The initialization vector (IV). Must be 128 bits (16 bytes) for AES-256-CBC.
 * @returns {string} The decrypted data in UTF-8 format.
 */
function decrypt(encryptedData, key, iv) {
  let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = {
  encrypt,
  decrypt,
};
