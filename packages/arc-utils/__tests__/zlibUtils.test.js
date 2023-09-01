const zlibUtils = require('./zlibUtils');
const fs = require('fs');

async function main() {
    // Compress buffer and then decompress it
    const original = Buffer.from('Hello, World!', 'utf-8');
    const compressed = await zlibUtils.gzip(original);
    const decompressed = await zlibUtils.gunzip(compressed);
    console.log(decompressed.toString('utf-8')); // Should print "Hello, World!"

    // Compress and decompress streams
    const src = fs.createReadStream('./source.txt');
    const compressionDest = fs.createWriteStream('./source.txt.gz');
    await zlibUtils.gzipStream(src, compressionDest);

    const compressedSrc = fs.createReadStream('./source.txt.gz');
    const decompressionDest = fs.createWriteStream('./decompressed.txt');
    await zlibUtils.gunzipStream(compressedSrc, decompressionDest);
}

main().catch(console.error);
