// streamUtils.js
const stream = require('stream');
const fs = require('fs');

/**
 * Converts a readable stream to a promise that resolves with its complete data.
 * @param {stream.Readable} readable
 * @returns {Promise<Buffer>}
 */
function streamToBuffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

/**
 * Creates a readable stream from a given buffer.
 * @param {Buffer} buffer
 * @returns {stream.Readable}
 */
function bufferToStream(buffer) {
  const readable = new stream.Readable();
  readable.push(buffer);
  readable.push(null); // Signal end of data.
  return readable;
}

/**
 * Pipes one stream into another and returns a promise that resolves/rejects when the operation completes/fails.
 * @param {stream.Readable} source
 * @param {stream.Writable} dest
 * @returns {Promise<void>}
 */
function pipePromise(source, dest) {
  return new Promise((resolve, reject) => {
    source.pipe(dest).on('finish', resolve).on('error', reject);
  });
}

/**
 * Copies content from one file to another using streams.
 * @param {string} srcPath
 * @param {string} destPath
 * @returns {Promise<void>}
 */
async function copyFileWithStreams(srcPath, destPath) {
  const source = fs.createReadStream(srcPath);
  const dest = fs.createWriteStream(destPath);
  await pipePromise(source, dest);
}

module.exports = {
  streamToBuffer,
  bufferToStream,
  pipePromise,
  copyFileWithStreams,
};
