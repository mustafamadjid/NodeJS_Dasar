const os = require("node:os");

console.log(os.platform());
console.table(os.cpus());
console.log(os.arch());
