const { Router } = require("express");
const {
  addProductController,
  deleteProductController,
  getProductsController,
  getProductController,
  updateProductController,
} = require("../controllers/product");

const productsRouter = Router();

productsRouter.route("/").get(getProductsController).post(addProductController);

productsRouter
  .route("/:id")
  .get(getProductController)
  .put(updateProductController)
  .delete(deleteProductController);

module.exports = {
  productsRouter,
};
