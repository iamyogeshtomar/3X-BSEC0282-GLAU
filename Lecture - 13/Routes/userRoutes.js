const express = require(`express`);
const router = express.Router();
const {
  showSignUpForm,
  submitSignUpForm,
} = require(`../Controllers/userController.js`);

router.get(`/user/new`, showSignUpForm);

router.post(`/user`, submitSignUpForm);

module.exports = router;
