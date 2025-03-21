const express = require(`express`);
const router = express.Router();
const {
  showSignUpForm,
  submitSignUpForm,
  showSingleUser,
  showUserEditForm,
  submitUserEditForm,
  deleteUser,
} = require(`../Controllers/userController.js`);

router.get(`/user/new`, showSignUpForm);

router.post(`/user`, submitSignUpForm);

router.get(`/user/:id`, showSingleUser);

router.get(`/user/:id/edit`, showUserEditForm);

router.put(`/user/:id`, submitUserEditForm);

router.delete(`/user/:id`, deleteUser);

module.exports = router;
