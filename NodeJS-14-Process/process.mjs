import process from "process";

process.addListener("exit", function (exitCode) {
  console.log(`NodeJS exit with code ${exitCode}`);
});

for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.log("INI GA KELUAR");
