const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Hash a plain text password.
 *
 * @param {string} plainPassword - The plain text password to be hashed.
 * @return {Promise<string>} - The hashed password.
 */
const hashPassword = async (plainPassword) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password: ' + error.message);
  }
};

/**
 * Verify a plain text password against a hashed password.
 *
 * @param {string} plainPassword - The plain text password to verify.
 * @param {string} hashedPassword - The hashed version of the password.
 * @return {Promise<boolean>} - True if the passwords match, false otherwise.
 */
const verifyPassword = async (plainPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw new Error('Error verifying password: ' + error.message);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
};
