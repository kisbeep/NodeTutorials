var fs = require("fs");
var zlib = require("zlib");

// Compress input.txt to input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");

// Decompress the file to uncompressed.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('uncompressed.txt'));

console.log("File Decompressed.");