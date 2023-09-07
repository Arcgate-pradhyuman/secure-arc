// fsUtils.js
const fs = require('fs').promises;

/**
 * Check if a file or directory exists.
 * @param {string} path - Path to the file or directory.
 * @returns {Promise<boolean>}
 */
async function exists(path) {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Create a directory if it doesn't exist.
 * @param {string} path - Path to the directory.
 * @returns {Promise<void>}
 */
async function ensureDir(path) {
  if (!(await exists(path))) {
    await fs.mkdir(path, { recursive: true });
  }
}

/**
 * Read a file as a string.
 * @param {string} path - Path to the file.
 * @param {string} encoding - File encoding, default is 'utf-8'.
 * @returns {Promise<string>}
 */
async function readFile(path, encoding = 'utf-8') {
  return fs.readFile(path, encoding);
}

/**
 * Write data to a file.
 * @param {string} path - Path to the file.
 * @param {string|Buffer} data - Data to write.
 * @param {string} encoding - File encoding, default is 'utf-8'.
 * @returns {Promise<void>}
 */
async function writeFile(path, data, encoding = 'utf-8') {
  await fs.writeFile(path, data, encoding);
}

/**
 * Append data to a file.
 * @param {string} path - Path to the file.
 * @param {string|Buffer} data - Data to append.
 * @param {string} encoding - File encoding, default is 'utf-8'.
 * @returns {Promise<void>}
 */
async function appendToFile(path, data, encoding = 'utf-8') {
  await fs.appendFile(path, data, encoding);
}

module.exports = {
  exists,
  ensureDir,
  readFile,
  writeFile,
  appendToFile,
};
