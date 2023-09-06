import CookieUtils from './cookieUtils.js';

// Example usage
CookieUtils.setItem("username", "JohnDoe", {expires: new Date(Date.now() + 24 * 60 * 60 * 1000)}); // set for 1 day
console.log(CookieUtils.getItem("username"));  // Outputs: JohnDoe
console.log(CookieUtils.hasKey("username"));   // Outputs: true
CookieUtils.removeItem("username");
console.log(CookieUtils.getItem("username"));  // Outputs: null
