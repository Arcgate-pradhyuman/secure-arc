const LocalStorageUtils = {
  /**
   * Store a key-value pair in localStorage
   * @param {string} key - Key for the stored data
   * @param {*} value - Value to store, it will be converted to a string using JSON.stringify
   */
  setItem: function (key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting localStorage key:', key, error);
    }
  },

  /**
   * Retrieve a value from localStorage by key
   * @param {string} key - Key of the data to retrieve
   * @return {*} - Parsed value or null if not found
   */
  getItem: function (key) {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return null;
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error('Error retrieving localStorage key:', key, error);
      return null;
    }
  },

  /**
   * Remove a key-value pair from localStorage
   * @param {string} key - Key of the data to remove
   */
  removeItem: function (key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing localStorage key:', key, error);
    }
  },

  /**
   * Check if a key exists in localStorage
   * @param {string} key - Key to check
   * @return {boolean} - Whether the key exists or not
   */
  hasKey: function (key) {
    return this.getItem(key) !== null;
  },
};

export default LocalStorageUtils;
