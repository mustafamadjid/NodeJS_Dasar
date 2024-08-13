// import fs from "fs";
import fs from "fs/promises";

// Blocking (Synchronous)
// const buffer = fs.readFileSync("NodeJS-9-File System/fileSystem.mjs");
// console.info(buffer.toString());

// Non-Blocking Promises (Asynchronous)
const buffer = await fs.readFile("NodeJS-9-File System/fileSystem.mjs");
console.info(buffer.toString());

await fs.writeFile(
  "NodeJS-9-File System/tempt.txt",
  "Halo Semua ini adalah file teks  (dibuat dari write file promises)"
);
