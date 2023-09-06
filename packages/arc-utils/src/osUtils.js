// osUtils.js
const os = require('os');

/**
 * Get the total memory and free memory in a human-readable format.
 * @returns {Object} An object with total and free memory in MB.
 */
function getMemoryInfoInMB() {
  return {
    total: Math.round(os.totalmem() / (1024 * 1024)),
    free: Math.round(os.freemem() / (1024 * 1024)),
  };
}

/**
 * Get basic system information.
 * @returns {Object} An object with platform, CPU architecture, and OS release.
 */
function getSystemInfo() {
  return {
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
  };
}

/**
 * Get user's home directory.
 * @returns {string}
 */
function getUserHomeDir() {
  return os.homedir();
}

/**
 * Get the system uptime in minutes.
 * @returns {number}
 */
function getUptimeInMinutes() {
  return Math.round(os.uptime() / 60);
}

/**
 * Get the system's hostname.
 * @returns {string}
 */
function getHostName() {
  return os.hostname();
}

module.exports = {
  getMemoryInfoInMB,
  getSystemInfo,
  getUserHomeDir,
  getUptimeInMinutes,
  getHostName,
};

// const osUtils = require('./osUtils');

// console.log(osUtils.getMemoryInfoInMB());     // { total: 16384, free: 5887 } (example values)
// console.log(osUtils.getSystemInfo());         // { platform: 'darwin', arch: 'x64', release: '18.7.0' } (example values)
// console.log(osUtils.getUserHomeDir());        // /Users/username (example value)
// console.log(osUtils.getUptimeInMinutes());    // 420 (example value)
// console.log(osUtils.getHostName());           // User-MacBook-Pro.local (example value)
