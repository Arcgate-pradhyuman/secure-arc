// jwt.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET_KEY;

/**
 * Generates a JSON Web Token (JWT) based on the provided payload.
 *
 * @param {Object} payload - The data you want to embed within the token.
 * @param {number} [expiresIn=3600] - Duration until the token expires, in seconds. Default is 3600 seconds (1 hour).
 * @returns {string} The generated JWT.
 */
function generateToken(payload, expiresIn = 3600) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

/**
 * Verifies a given JWT against the secret key.
 *
 * @param {string} token - The JWT to be verified.
 * @returns {Object|null} The decoded payload if verification is successful, or null if verification fails.
 */
function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error('Access token verification failed:', error.message);
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
