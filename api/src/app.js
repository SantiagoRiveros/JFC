const express = require("express");
const routes = require("./routes/index.js");
const morgan = require("morgan");
const server = express();
const passport = require("./routes/passportAuth");

server.name = "API";
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.use("/", routes);

module.exports = server;
