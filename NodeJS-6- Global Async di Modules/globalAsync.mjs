// File module .mjs secara default merupakan async

function samplePromise() {
  return Promise.resolve("Hello World");
}
const name = await samplePromise();
console.log(name);
