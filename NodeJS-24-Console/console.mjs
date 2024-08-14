import util from "util";

console.log(util.format("Name : %s"), "Mustafa");

const person = {
  firstName: "Eko",
  lastName: "Kurniawan",
};

console.log(util.format("Person : %j"), person);
