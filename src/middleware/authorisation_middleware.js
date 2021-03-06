function authRedirect(req, res, next) {
  if (req.user) {
    return res.redirect('/dashboard');
  } else {
    return next();
  }
}

function authorise(req, res, next) {
  if (req.user) {
    return next();
  } else {
    return res.redirect('/');
  }
}

module.exports = {
  authRedirect,
  authorise,
};
