const { Router } = require("express");
const { productsRouter } = require("./products");
const { userAuthenticatedMiddleware } = require("../middlewares");

const routes = Router();

routes.use("/products", userAuthenticatedMiddleware, productsRouter);

module.exports = {
  routes,
};
