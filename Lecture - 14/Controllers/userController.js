const User = require(`../Schemas/userSchema.js`);
const bcryptjs = require(`bcryptjs`);

const showSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

const submitSignUpForm = async (req, res) => {
  const { name, dob, phone, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = await User.create({
    name,
    dob,
    phone,
    email,
    password: hashedPassword,
  });
  res.send(newUser);
};

const showSingleUser = async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  res.render(`singleUser.ejs`);
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

module.exports = {
  showSignUpForm,
  submitSignUpForm,
  showUserEditForm,
  showSingleUser,
  submitUserEditForm,
  deleteUser,
};
