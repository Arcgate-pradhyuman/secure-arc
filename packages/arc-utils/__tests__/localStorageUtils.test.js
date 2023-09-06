import LocalStorageUtils from './localStorageUtils.js';

// Example usage
LocalStorageUtils.setItem("username", "JohnDoe");
console.log(LocalStorageUtils.getItem("username"));  // Outputs: JohnDoe
console.log(LocalStorageUtils.hasKey("username"));   // Outputs: true
LocalStorageUtils.removeItem("username");
console.log(LocalStorageUtils.getItem("username"));  // Outputs: null
