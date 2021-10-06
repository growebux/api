function userAuthenticatedMiddleware(req, res, next) {
  let isAuthed = true;

  if (isAuthed) {
    return next();
  }

  console.log("THIS IS ALSO RUNNING");

  res.json({
    error: "Sorry buddy, you do not have access",
    code: 400,
  });
}

module.exports = {
  userAuthenticatedMiddleware,
};
