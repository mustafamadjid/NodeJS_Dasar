/*
Readline

const readline = require("node:readline");

(Cara yang menggunakan require)

*/

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's ur name ? : ", (answer) => {
  console.log(`Hello ${answer}`);
  rl.close();
});

// function closeRl() {
//   rl.close();
// }

// setTimeout(closeRl, 5000);
