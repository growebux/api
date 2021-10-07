const { Router } = require("express");
const {
  addUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} = require("../controllers/user");


const usersRouter = Router();

usersRouter.route("/").get(getUserController).post(addUserController);

usersRouter
  .route("/:id")
  .get(getUserController)
  .put(updateUserController)
  .delete(deleteUserController);

module.exports = {
  usersRouter,
};
