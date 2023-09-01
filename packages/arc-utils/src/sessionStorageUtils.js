const SessionStorageUtils = {
  /**
   * Store a key-value pair in sessionStorage
   * @param {string} key - Key for the stored data
   * @param {*} value - Value to store, it will be converted to a string using JSON.stringify
   */
  setItem: function (key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting sessionStorage key:', key, error);
    }
  },

  /**
   * Retrieve a value from sessionStorage by key
   * @param {string} key - Key of the data to retrieve
   * @return {*} - Parsed value or null if not found
   */
  getItem: function (key) {
    try {
      const serializedValue = sessionStorage.getItem(key);
      if (serializedValue === null) return null;
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error('Error retrieving sessionStorage key:', key, error);
      return null;
    }
  },

  /**
   * Remove a key-value pair from sessionStorage
   * @param {string} key - Key of the data to remove
   */
  removeItem: function (key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing sessionStorage key:', key, error);
    }
  },

  /**
   * Check if a key exists in sessionStorage
   * @param {string} key - Key to check
   * @return {boolean} - Whether the key exists or not
   */
  hasKey: function (key) {
    return this.getItem(key) !== null;
  },
};

export default SessionStorageUtils;
