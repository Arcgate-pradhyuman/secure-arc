// configUtils.js

/**
 * Retrieve the value of an environment variable.
 * @param {string} key - The environment variable name.
 * @param {any} [defaultValue] - A default value if the environment variable is not set.
 * @returns {string|undefined}
 */
function getEnv(key, defaultValue) {
  return process.env[key] || defaultValue;
}

/**
 * Check if the current environment is production.
 * @returns {boolean}
 */
function isProduction() {
  return process.env.NODE_ENV === 'PROD';
}

/**
 * Check if the current environment is development.
 * @returns {boolean}
 */
function isDevelopment() {
  return process.env.NODE_ENV === 'DEV';
}

/**
 * Retrieve the current app's version from process. (usually set in package.json)
 * @returns {string|undefined}
 */
function getAppVersion() {
  return process.env.npm_package_version;
}

/**
 * Get the arguments passed to the script, excluding the Node executable and the script name.
 * @returns {Array<string>}
 */
function getScriptArgs() {
  return process.argv.slice(2);
}

module.exports = {
  getEnv,
  isProduction,
  isDevelopment,
  getAppVersion,
  getScriptArgs,
};

const configUtils = require('./configUtils');

console.log(configUtils.getEnv('PORT', 3000)); // Get the value of the PORT environment variable or 3000 if it's not set.
console.log(configUtils.isProduction()); // Check if the current environment is set to production.
console.log(configUtils.isDevelopment()); // Check if the current environment is set to development.
console.log(configUtils.getAppVersion()); // Get the app's version (must run via npm script to work).
console.log(configUtils.getScriptArgs()); // Get the arguments passed to the script.
