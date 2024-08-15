import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.info(request.url);
  console.table(request.headers);

  if (request.method == "POST") {
    request.addListener("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(`${data} \n\n`);
      response.write(`Request success with URL : ${request.url}`);
      response.end();
    });
  } else {
    if (request.url === "/sepatu") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<h1>Sepatu Batik</h1>");
      console.log(response.headers);
    } else {
      response.write("Hello From HTTP Server");
      response.end();
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
