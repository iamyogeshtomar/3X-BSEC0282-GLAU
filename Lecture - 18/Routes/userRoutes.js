const express = require(`express`);
const router = express.Router();

const passport = require(`passport`);
const {
  showSignUpForm,
  submitSignUpForm,
  showSingleUser,
  showUserEditForm,
  submitUserEditForm,
  deleteUser,
  showSignInForm,
  logoutUser,
  handleSignIn,
} = require(`../Controllers/userController.js`);

router.get(`/user/new`, showSignUpForm);

router.post(`/user`, submitSignUpForm);

router.get(`/signin`, showSignInForm);

router.post(
  "/signin",
  passport.authenticate("local", { failureRedirect: "/signin" }),
  function (req, res) {
    res.redirect("/products");
  }
);

router.get(`/logout`, logoutUser);

router.get(`/user/:id`, showSingleUser);

router.get(`/user/:id/edit`, showUserEditForm);

router.put(`/user/:id`, submitUserEditForm);

router.delete(`/user/:id`, deleteUser);

// router.get (`/signup`, )

module.exports = router;
