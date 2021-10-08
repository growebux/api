const { Router } = require("express");
const {
  addUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
} = require("../controllers/user");

const usersRouter = Router();

usersRouter.route("/").get(getUsersController).post(addUserController);

usersRouter
  .route("/:id")
  .get(getUserController)
  .put(updateUserController)
  .delete(deleteUserController);

module.exports = {
  usersRouter,
};
