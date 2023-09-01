// bufferUtils.js

/**
 * Convert a string to a buffer.
 * @param {string} input
 * @param {string} encoding - Default is 'utf-8'.
 * @returns {Buffer}
 */
function stringToBuffer(input, encoding = 'utf-8') {
  return Buffer.from(input, encoding);
}

/**
 * Convert a buffer to a string.
 * @param {Buffer} buffer
 * @param {string} encoding - Default is 'utf-8'.
 * @returns {string}
 */
function bufferToString(buffer, encoding = 'utf-8') {
  return buffer.toString(encoding);
}

/**
 * Concatenate multiple buffers into a single buffer.
 * @param {Buffer[]} buffers
 * @returns {Buffer}
 */
function concatBuffers(buffers) {
  return Buffer.concat(buffers);
}

/**
 * Compare two buffers and check if they are the same.
 * @param {Buffer} buf1
 * @param {Buffer} buf2
 * @returns {boolean}
 */
function areBuffersEqual(buf1, buf2) {
  return Buffer.compare(buf1, buf2) === 0;
}

/**
 * Allocates a new buffer of given size filled with zeros.
 * @param {number} size
 * @returns {Buffer}
 */
function allocateBuffer(size) {
  return Buffer.alloc(size);
}

module.exports = {
  stringToBuffer,
  bufferToString,
  concatBuffers,
  areBuffersEqual,
  allocateBuffer,
};
