// zlibUtils.js
const zlib = require('zlib');
const stream = require('stream');
const util = require('util');

const pipeline = util.promisify(stream.pipeline);

/**
 * Compresses a buffer using gzip.
 * @param {Buffer} buffer
 * @returns {Promise<Buffer>}
 */
async function gzip(buffer) {
  return util.promisify(zlib.gzip)(buffer);
}

/**
 * Decompresses a gzip buffer.
 * @param {Buffer} buffer
 * @returns {Promise<Buffer>}
 */
async function gunzip(buffer) {
  return util.promisify(zlib.gunzip)(buffer);
}

/**
 * Compresses a stream using gzip.
 * @param {stream.Readable} source
 * @param {stream.Writable} dest
 * @returns {Promise<void>}
 */
async function gzipStream(source, dest) {
  const gzipTransform = zlib.createGzip();
  await pipeline(source, gzipTransform, dest);
}

/**
 * Decompresses a gzip stream.
 * @param {stream.Readable} source
 * @param {stream.Writable} dest
 * @returns {Promise<void>}
 */
async function gunzipStream(source, dest) {
  const gunzipTransform = zlib.createGunzip();
  await pipeline(source, gunzipTransform, dest);
}

module.exports = {
  gzip,
  gunzip,
  gzipStream,
  gunzipStream,
};
