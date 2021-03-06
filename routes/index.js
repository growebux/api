const { Router } = require("express");
const { productsRouter } = require("./products");
const { usersRouter } = require("./users");
const { userAuthenticatedMiddleware } = require("../middlewares");

const routes = Router();

routes.use("/products", userAuthenticatedMiddleware, productsRouter);
routes.use("/users", userAuthenticatedMiddleware, usersRouter);

module.exports = {
  routes,
};
