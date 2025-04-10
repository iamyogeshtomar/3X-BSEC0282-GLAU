const checkUser = (req, res) => {
  if (req.user) {
    next();
  }
  req.flash(`warning`, `login first`);
  res.redirect(`/signin`);
};

const checkMerchant = (req, res) => {};

module.exports = { checkUser };
