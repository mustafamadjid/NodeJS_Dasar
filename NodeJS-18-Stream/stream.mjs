import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Hello World!\n");
writer.write("Stream Writers\n");
writer.write("Stream Writers New \n");
writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => console.log(data.toString()));
