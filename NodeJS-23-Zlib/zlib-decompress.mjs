import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("NodeJS-23-Zlib/zlib.mjs.gz");
console.log(source.toString());

const result = zlib.unzipSync(source);

console.log(result.toString());
