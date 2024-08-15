import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("NodeJS-24-Console/application.log");

const log = new Console({
  stdout: logFile,
  stderr: logFile,
});

log.info("Hello World");
log.error("Hello World");
log.warn("Hello World");
log.debug("Hello World");

const person = {
  firstName: "Mustafa",
  lastName: "Madjid",
};

log.table(person);
