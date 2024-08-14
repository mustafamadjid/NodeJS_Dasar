import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("NodeJS-23-Zlib/zlib.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("NodeJS-23-Zlib/zlib.mjs.gz", result);

console.log(source.toString());
