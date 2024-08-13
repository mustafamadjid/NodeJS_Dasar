import * as readline from "readline";
import process from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's ur name ? : ", (answer) => {
  console.log(`Hello ${answer}`);
  rl.close();
});
