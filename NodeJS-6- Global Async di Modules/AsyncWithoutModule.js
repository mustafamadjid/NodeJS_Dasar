function samplePromise() {
  return Promise.resolve("Hello World");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
