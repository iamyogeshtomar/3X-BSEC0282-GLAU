const User = require(`../Schemas/userSchema.js`);
const bcryptjs = require(`bcryptjs`);
const passport = require(`passport`);
// const myPassport = require(`../auth/userAuth.js`);

const showSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const submitSignUpForm = async (req, res) => {
  const { username, name, dob, phone, email, password } = req.body; //recieveed user info
  const user = new User({ username, name, dob, phone, email });
  const newUser = await User.register(user, password);
  newUser.save();
  // await User.create({
  //   name,
  //   dob,
  //   phone,
  //   email,
  //   password: hashedPassword,
  // });
  // res.send(newUser);
  req.flash(`success`, `Sign up successful!!`);
  res.redirect(`/signin`);
};

const showSingleUser = async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  res.render(`singleUser.ejs`, { singleUser });
};

const showUserEditForm = async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  res.render(`userEditForm.ejs`, { singleUser });
};

const submitUserEditForm = async (req, res) => {
  const { id } = req.params;
  const { name, dob, phone, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const updatedUser = await User.findByIdAndUpdate(id, {
    name,
    dob,
    phone,
    email,
    password: hashedPassword,
  });
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
};

const showSignInForm = (req, res) => {
  res.render(`signInForm.ejs`);
};

const handleSignIn = passport.authenticate("local", {
  successRedirect: `/products`,
  failureRedirect: `/signin`,
  // successRedirect: `/products`,
});

const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return console.log(err);
  });
  req.flash(`success`, `Logged out successfully!`);
  res.redirect(`/products`);
};

module.exports = {
  showSignUpForm,
  submitSignUpForm,
  showUserEditForm,
  showSingleUser,
  submitUserEditForm,
  deleteUser,
  showSignInForm,
  handleSignIn,
  logoutUser,
};
