const express = require(`express`);
const helmet = require(`helmet`);

const validateUser = require(`./middleware/validateUser`);
const logger = require(`./middleware/logger`);

const userRouter = require(`../users/userRouter`);

const server = express();

server.use(helmet());
server.use(logger);

server.use(`/api/users`, userRouter);

server.get(`/`, (req, res) => res.send(`<h2>API</h2>`));

module.exports = server;
