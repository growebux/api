const { Router } = require("express");
const { read, create, remove, update, readOne } = require("../app");
const { converIdToNumberMiddleware } = require("../middlewares");

const productsRouter = Router();

productsRouter.route("/").get(read).post(create);

productsRouter.route("/:id").get(readOne).put(update).delete(remove);

module.exports = {
  productsRouter,
};
