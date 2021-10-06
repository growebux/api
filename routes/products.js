const { Router } = require("express");
const { read, create, remove, update } = require("../app");
const { converIdToNumberMiddleware } = require("../middlewares");

const productsRouter = Router();

productsRouter.route("/").get(read).post(create);

productsRouter
  .route("/:id")
  .put(converIdToNumberMiddleware, update)
  .delete(converIdToNumberMiddleware, remove);

module.exports = {
  productsRouter,
};
