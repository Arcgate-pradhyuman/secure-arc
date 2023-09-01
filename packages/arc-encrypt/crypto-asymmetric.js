const crypto = require('crypto');

/**
 * Encrypts the provided data using the given public key.
 *
 * @param {string} data - The data to be encrypted.
 * @param {string|Buffer|KeyObject} publicKey - The public key used for encryption. Can be a PEM formatted string or a KeyObject.
 * @returns {string} The encrypted data encoded as a base64 string.
 */
function encrypt(data, publicKey) {
  const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data));
  return encrypted.toString('base64');
}

/**
 * Decrypts the provided encrypted data using the given private key.
 *
 * @param {string} encryptedData - The encrypted data as a base64 string.
 * @param {string|Buffer|KeyObject} privateKey - The private key used for decryption. Can be a PEM formatted string or a KeyObject.
 * @returns {string} The decrypted data as a UTF-8 string.
 */
function decrypt(encryptedData, privateKey) {
  const decrypted = crypto.privateDecrypt(
    privateKey,
    Buffer.from(encryptedData, 'base64')
  );
  return decrypted.toString('utf8');
}

module.exports = {
  encrypt,
  decrypt,
};
