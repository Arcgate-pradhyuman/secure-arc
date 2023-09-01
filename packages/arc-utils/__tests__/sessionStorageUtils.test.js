import SessionStorageUtils from './sessionStorageUtils.js';

// Example usage
SessionStorageUtils.setItem("username", "JohnDoe");
console.log(SessionStorageUtils.getItem("username"));  // Outputs: JohnDoe
console.log(SessionStorageUtils.hasKey("username"));   // Outputs: true
SessionStorageUtils.removeItem("username");
console.log(SessionStorageUtils.getItem("username"));  // Outputs: null
