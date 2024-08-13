import { URL } from "url";

const pzn = new URL(
  "https://kelas.programmerzamannow.com/belajar?kelas=mongodb"
);

console.info(pzn.toString());

console.info(pzn.protocol); // https:
console.info(pzn.host); // kelas.programmerzamannow.com
console.info(pzn.hostname); // kelas.programmerzamannow.com
console.info(pzn.port); //

console.info(pzn.pathname); // /p/belajar-mongodb

console.info(pzn.searchParams); // belajar-mongodb

// Ubah-ubah URL

pzn.host = "www.kelasbaru.com";
pzn.searchParams.append("status", "premium");

console.info("\n\n");

console.info(pzn.toString());

console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.hostname);
console.info(pzn.port);

console.info(pzn.pathname);

console.info(pzn.searchParams);
