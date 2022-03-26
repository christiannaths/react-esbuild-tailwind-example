const liveServer = require("live-server");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4200;

console.log("Starting dev server on", `http://${host}:${port}`);

liveServer.start({
  port: port,
  host: host,
  root: "./public",
  open: false,
  file: "index.html",
  logLevel: 0,
});
