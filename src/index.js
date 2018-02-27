const dotenv = require("dotenv");
dotenv.config();

const errorhandler = require("errorhandler");
const config = require("./config");
const logger = require("./logger");
const app = require("./app");

if (process.env.NODE_ENV !== "production") {
  app.use(errorhandler());
}

const server = app.listen(config.PORT, () => {
  const address = server.address();
  logger.info(`Listening on ${address.address}:${address.port}`);
});
