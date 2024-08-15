import cluster from "cluster";
import http, { request } from "http";
import os from "os";
import process from "process";

if (cluster.isPrimary) {
  console.log(`Primary Id : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", function (worker) {
    console.log(`Worker ${worker.id} died`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  });

  server.listen(8080);
  console.log(`Worker ${process.pid} started with parent : ${process.ppid}`);
}
