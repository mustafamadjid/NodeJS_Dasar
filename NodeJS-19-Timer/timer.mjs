const buffer = Buffer.from("Hello World");
console.log(buffer);
console.log(buffer.toString());

buffer.reverse();
console.log(buffer.toString());

// Buffer Encoding
console.log();
const bufferEncode = Buffer.from("This is Encoder", "utf-8");
console.log(bufferEncode);

console.log(bufferEncode.toString("base64"));
console.log(bufferEncode.toString("hex"));

const bufferUrl = Buffer.from("VGhpcyBpcyBFbmNvZGVy", "base64");
console.info(bufferUrl.toString("utf-8"));
