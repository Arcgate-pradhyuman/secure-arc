const bufferUtils = require('./bufferUtils');

let buffer1 = bufferUtils.stringToBuffer("Hello");
let buffer2 = bufferUtils.stringToBuffer(" World");

let combinedBuffer = bufferUtils.concatBuffers([buffer1, buffer2]);
console.log(bufferUtils.bufferToString(combinedBuffer)); // Hello World

console.log(bufferUtils.areBuffersEqual(buffer1, buffer2)); // false
