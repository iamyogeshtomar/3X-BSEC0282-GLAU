const User = require(`../Schemas/userSchema.js`);
const bcryptjs = require(`bcryptjs`);

const showSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const submitSignUpForm = async (req, res) => {
  const { name, dob, phone, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = await User.create({ name, dob, phone, email, password });
  res.send(newUser);
};

module.exports = { showSignUpForm, submitSignUpForm };
