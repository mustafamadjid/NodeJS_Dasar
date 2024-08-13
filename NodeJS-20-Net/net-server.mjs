// Net Server

import net from "net";

const server = net.createServer((client) => {
  console.log("Client Connected");

  client.on("data", (data) => {
    console.log(`Receive data ${data.toString()}`);
    client.write(
      `Hello from Server, here is your data : ${data.toString()} \r\n`
    );
  });
});

server.listen(3000, "localhost");
