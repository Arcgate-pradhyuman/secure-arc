// dateUtils.js

/**
 * Get the current date and time in the format YYYY-MM-DD HH:MM:SS.
 * @returns {string}
 */
function getCurrentDateTime() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(now.getDate()).padStart(2, '0')} ${String(
    now.getHours()
  ).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
    now.getSeconds()
  ).padStart(2, '0')}`;
}

/**
 * Convert a date object to a formatted string.
 * @param {Date} date
 * @param {string} format - Format string where YYYY is year, MM is month, DD is date, HH is hour, MM is minutes, and SS is seconds.
 * @returns {string}
 */
function formatDate(date, format) {
  let formattedDate = format;
  formattedDate = formattedDate.replace(/YYYY/g, date.getFullYear());
  formattedDate = formattedDate.replace(
    /MM/g,
    String(date.getMonth() + 1).padStart(2, '0')
  );
  formattedDate = formattedDate.replace(
    /DD/g,
    String(date.getDate()).padStart(2, '0')
  );
  formattedDate = formattedDate.replace(
    /HH/g,
    String(date.getHours()).padStart(2, '0')
  );
  formattedDate = formattedDate.replace(
    /mm/g,
    String(date.getMinutes()).padStart(2, '0')
  );
  formattedDate = formattedDate.replace(
    /SS/g,
    String(date.getSeconds()).padStart(2, '0')
  );
  return formattedDate;
}

/**
 * Calculate the difference between two dates in days.
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 */
function daysBetween(date1, date2) {
  const timeDifference = date2 - date1;
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}

/**
 * Add days to a given date.
 * @param {Date} date
 * @param {number} days
 * @returns {Date}
 */
function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

module.exports = {
  getCurrentDateTime,
  formatDate,
  daysBetween,
  addDays,
};

// const dateUtils = require('./dateUtils');

// console.log(dateUtils.getCurrentDateTime());     // Outputs current date and time in format "YYYY-MM-DD HH:MM:SS"
// console.log(dateUtils.formatDate(new Date(), "DD-MM-YYYY"));  // Outputs date in format "DD-MM-YYYY"
// console.log(dateUtils.daysBetween(new Date('2022-01-01'), new Date('2022-01-05')));  // Outputs "4"
// console.log(dateUtils.addDays(new Date('2022-01-01'), 5));  // Outputs date of "2022-01-06"
