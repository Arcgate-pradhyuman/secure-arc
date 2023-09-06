const streamUtils = require('./streamUtils');
const fs = require('fs');

async function main() {
    // Convert stream to buffer
    const readable = fs.createReadStream('./source.txt');
    const data = await streamUtils.streamToBuffer(readable);
    console.log(data.toString());

    // Convert buffer to stream and then back to buffer for demonstration
    const bufStream = streamUtils.bufferToStream(data);
    const newData = await streamUtils.streamToBuffer(bufStream);
    console.log(newData.toString());

    // Copy file using streams
    await streamUtils.copyFileWithStreams('./source.txt', './destination.txt');
}

main().catch(console.error);


//this is not proper test file
