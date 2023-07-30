const customWithAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/custom-login");
    } else {
      next();
    }
  };
  
  module.exports = customWithAuth;
  