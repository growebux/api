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

function converIdToNumberMiddleware(req, res, next) {
  req.params.id = Number(req.params.id);
  next();
}

module.exports = {
  converIdToNumberMiddleware,
  userAuthenticatedMiddleware,
};
