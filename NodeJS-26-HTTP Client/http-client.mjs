import https from "https";

const endpoint =
  "https://01j5awtct586vwd4vms6xqnpa100-53a8f490bb81453460ab.requestinspector.com";

const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Mustafa",
  lastName: "Madjid",
});

request.write(body);
request.end();
