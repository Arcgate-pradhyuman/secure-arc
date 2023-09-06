const CookieUtils = {
  /**
   * Store a key-value pair as a cookie
   * @param {string} name - Name of the cookie
   * @param {*} value - Value to store
   * @param {Object} [options] - Additional cookie options (e.g., expiry, path, domain, secure)
   */
  setItem: function (name, value, options = {}) {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}`;

    if (options.expires) {
      const expiryDate = new Date(options.expires).toUTCString();
      cookieString += `; expires=${expiryDate}`;
    }

    if (options.path) {
      cookieString += `; path=${options.path}`;
    }

    if (options.domain) {
      cookieString += `; domain=${options.domain}`;
    }

    if (options.secure) {
      cookieString += '; secure';
    }

    document.cookie = cookieString;
  },

  /**
   * Retrieve a cookie value by its name
   * @param {string} name - Name of the cookie to retrieve
   * @return {*} - Cookie value or null if not found
   */
  getItem: function (name) {
    const cookieArray = document.cookie.split('; ');
    for (let cookie of cookieArray) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === decodeURIComponent(name)) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  },

  /**
   * Remove a cookie by its name
   * @param {string} name - Name of the cookie to remove
   */
  removeItem: function (name) {
    this.setItem(name, '', {
      expires: new Date(0),
    });
  },

  /**
   * Check if a cookie exists by its name
   * @param {string} name - Name of the cookie to check
   * @return {boolean} - Whether the cookie exists or not
   */
  hasKey: function (name) {
    return this.getItem(name) !== null;
  },
};

export default CookieUtils;
